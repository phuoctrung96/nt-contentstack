import React from "react"

import AccordionItem from "./AccordionItem"

import { AccordionModule } from "../../../models/modules"

interface Props extends AccordionModule {}

const defaultProps = {}

const Accordion: React.FC<Props> = props => {
  return (
    <section className="accordionModule">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell xlarge-2 show-for-xlarge" />
          <div className="cell medium-8 xlarge-7 text">
            {props.accordion_items?.map((item, index) => (
              <AccordionItem
                key={`accordion_${index}`}
                {...item}
                open={index === 0 && props.first_open}
              />
            ))}
          </div>
          <div className="cell medium-4 xlarge-3" />
        </div>
      </div>
    </section>
  )
}

Accordion.defaultProps = defaultProps

export default Accordion
