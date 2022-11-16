import React from "react"

import RichText from "../../RichText"

import { FaqsModule } from "../../../models/modules"

interface Props extends FaqsModule {}

const defaultProps = {}

const Faqs: React.FC<Props> = props => {
  // console.log("Faqs: ", props)

  return (
    <section className="faqs">
      <div className="grid-container">
        <div className="grid-x grid-margin-x align-center">
          <div className="cell xlarge-2 show-for-xlarge" />
          <div className="cell medium-8 xlarge-7 faq__list">
            {props.faqs?.map((faq, index) => (
              <div key={`faq_${index}`} className="faq">
                <h3 className="faq__heading">{faq.title}</h3>
                <div className="faq__content text">
                  <RichText content={faq.content} />
                </div>
              </div>
            ))}
          </div>
          <div className="cell medium-4 xlarge-3" />
        </div>
      </div>
    </section>
  )
}

Faqs.defaultProps = defaultProps

export default Faqs
