import React, { useState } from "react"

import Faqs from "../Faqs/Faqs"

import { FaqsModule, TabsModule } from "../../../models/modules"

interface Props extends TabsModule {
  cssClass?: string
}

const defaultProps = {}

const TabPanels: React.FC<Props> = props => {
  // console.log("TabPanels: ", props)

  // state
  const [active, setActive] = useState(0)

  return (
    <section className="tabs">
      <div className="tabs__triggers">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell">
              {props.tabs.map((tab, index) => (
                <button
                  key={`trigger_${index}`}
                  className={`tabs__trigger ${
                    active === index ? "active" : ""
                  }`}
                  onClick={() => setActive(index)}
                >
                  {tab.heading}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="tabs__content">
        {props.tabs.map((tab, index) => {
          if (active === index) {
            return (
              <div key={`tab_${index}`} className="tab">
                {tab.heading === "FAQs" && (
                  <Faqs {...(tab.content as FaqsModule)} />
                )}
                {tab.heading === "Map" && <h4>Map</h4>}
              </div>
            )
          }
        })}
      </div>
    </section>
  )
}

TabPanels.defaultProps = defaultProps

export default TabPanels
