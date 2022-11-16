import React from "react"

interface Props {
  selected: string[]
  toggleSelect: (x: string) => void
}

const defaultProps = {}

const BudgetFilter: React.FC<Props> = props => {
  const options = ["$", "$$$", "$$$$$"]

  return (
    <div className="cell medium-6 xlarge-2">
      <div className="filter two-columns">
        <h4 className="filter__title">Budget</h4>
        <ul className="filter__list">
          {options.map((option, index) => (
            <li key={`option_${index}`} className="filter__item">
              <button
                className={`checkbox ${
                  props.selected.indexOf(option) !== -1 ? "active" : ""
                }`}
                onClick={() => props.toggleSelect(option)}
              >
                <span className="box">{option}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

BudgetFilter.defaultProps = defaultProps

export default BudgetFilter
