import React from "react"

import { SearchBookModule } from "../../../models/modules"

interface Props extends SearchBookModule {}

const defaultProps = {}

const SearchBook: React.FC<Props> = props => {
  console.log("SearchBook: ", props)

  return (
    <section>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <h4>Search and Book</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

SearchBook.defaultProps = defaultProps

export default SearchBook
