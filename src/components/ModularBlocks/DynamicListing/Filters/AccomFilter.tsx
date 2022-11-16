import React from "react"

interface Props {
  selected: string[]
  toggleSelect: (x: string) => void
}

const defaultProps = {}

const AccomFilter: React.FC<Props> = props => {
  const options = [
    "Apartments",
    "Backpackers & hostels",
    "Bed & breakfasts",
    "Caravan, camping & holiday parks",
    "Cottages",
    "Farm stays",
    "Holiday houses",
    "Hotels",
    "Motels",
    "Resorts",
    "Retreats & lodges",
  ]

  return (
    <div className="cell xlarge-7">
      <div className="filter">
        <h4 className="filter__title">Accommodation type</h4>
        <ul className="filter__list two-columns">
          {options.map((option, index) => (
            <li key={`option_${index}`} className="filter__item">
              <button
                className={`checkbox ${
                  props.selected.indexOf(option) !== -1 ? "active" : ""
                }`}
                onClick={() => props.toggleSelect(option)}
              >
                <span>{option}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

AccomFilter.defaultProps = defaultProps

export default AccomFilter
