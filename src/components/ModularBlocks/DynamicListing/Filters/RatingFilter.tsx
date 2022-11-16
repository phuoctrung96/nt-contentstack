import React from "react"

interface Props {
  selected: string[]
  toggleSelect: (x: string) => void
}

const defaultProps = {}

const RatingFilter: React.FC<Props> = props => {
  const options = ["rating_1", "rating_2", "rating_3", "rating_4", "rating_5"]

  return (
    <div className="cell medium-6 xlarge-3">
      <div className="filter two-columns">
        <h4 className="filter__title">Star rating</h4>
        <ul className="filter__list">
          {options.map((option, i) => {
            const fullStars = [...Array(i + 1).keys()]
            const emptyStars = [...Array(options.length - i - 1).keys()]

            return (
              <li key={`option_${i}`} className="filter__item">
                <button
                  className={`checkbox ${
                    props.selected.indexOf(option) !== -1 ? "active" : ""
                  }`}
                  onClick={() => props.toggleSelect(option)}
                >
                  <span className="stars-group">
                    {fullStars.map(full => (
                      <i
                        key={`option_${i}_full_${full}`}
                        className="svg-icon svg-star-full"
                      />
                    ))}
                    {emptyStars.map(empty => (
                      <i
                        key={`option_${i}_empty_${empty}`}
                        className="svg-icon svg-star-o"
                      />
                    ))}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

RatingFilter.defaultProps = defaultProps

export default RatingFilter
