import React from "react"

import AccordionItem from "../Accordion/AccordionItem"
import Faqs from "../Faqs/Faqs"

import { FaqsModule, TabsModule } from "../../../models/modules"

interface Props extends TabsModule {
  cssClass?: string
}

const defaultProps = {}

const TabAccordion: React.FC<Props> = props => {
  // console.log("TabAccordion: ", props)

  return (
    <section className="tabs">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            {props.tabs.map((tab, index) => (
              <AccordionItem key={`accordion_${index}`} heading={tab.heading}>
                <>
                  {tab.heading === "FAQs" && (
                    <Faqs {...(tab.content as FaqsModule)} />
                  )}
                  {tab.heading === "Map" && <h4>Map</h4>}
                </>
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

TabAccordion.defaultProps = defaultProps

export default TabAccordion
