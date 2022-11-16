import React from "react"

const SectionHeader = React.lazy(() => import("../SectionHeader"))

import { StacklaModule } from "../../../models/modules"

interface Props extends StacklaModule {}

const defaultProps = {}

const Stackla: React.FC<Props> = props => {
  console.log("Stackla: ", props)

  return (
    <React.Suspense fallback="Loading...">
      <section className="ugc-gallery ugc-gallery--grid">
        <div className="grid-container">
          {(props.heading || props.introduction) && (
            <SectionHeader heading={props.heading} intro={props.introduction} />
          )}

          {/* stackla content */}
          <div className="grid-x grid-margin-x">
            <div className="cell">
              <h4>Stackla</h4>
            </div>
          </div>

          {/* 
         <esi:include
            id="esi-{{guid}}"
            src="https://northernterritory.com/_esi_/ugc-gallery?id={{guid}}&filterId={{stackla_filter}}&layout={{toLower layout}}&itemsPerPage={{items_per_page}}&hideShowMore={{show_more}}&lang={{lang}}&page=1&limit=9"
          />
          <esi:remove>
            <iframe
              style="display:none;"
              src="https://northernterritory.com/_esi_/ugc-gallery?id={{guid}}&filterId={{stackla_filter}}&layout={{toLower layout}}&itemsPerPage={{items_per_page}}&hideShowMore={{show_more}}&lang={{lang}}&page=1&limit=9&iframe=true"
            />
          </esi:remove>
        */}
        </div>
      </section>
    </React.Suspense>
  )
}

Stackla.defaultProps = defaultProps

export default Stackla
