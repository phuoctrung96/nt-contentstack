import React from "react"

interface Props {
  heading?: string
  disableMyTrip?: boolean
  cssClass?: string
}

const defaultProps = {}

const DealCard: React.FC<Props> = props => {
  // console.log("DealCard :", props)

  return (
    <a
      className={`deal__link deal-offer ${props.cssClass || ""}`}
      href="https://www.outbackspirittours.com.au/tours/christmas-wilderness-escape/?utm_source=tnt&amp;utm_medium=banner&amp;utm_campaign=seek_different&amp;utm_id=ost"
      target="_blank"
      rel="noopener"
      title="Opens in a new window"
      data-dealtypes=""
      data-uid="bltb984e95ff67ab8b5"
    >
      <div className="deal__image-copy-wrapper">
        <div className="deal__image lazyload-wrapper ratio--3-2">
          <img
            className=""
            sizes="370px"
            width="370"
            height="247"
            alt="two people on a beach in arnhem land"
            srcSet="https://images.northernterritory.com/v3/assets/blt0a1258326b2bae62/blt445cb4c828e2b571/633a31b73df1404a85022919/two_people_on_a_beach_in_arnhem_land.jpg?width=246&amp;height=164&amp;fit=crop&amp;format=jpg&amp;auto=webp 246w, https://images.northernterritory.com/v3/assets/blt0a1258326b2bae62/blt445cb4c828e2b571/633a31b73df1404a85022919/two_people_on_a_beach_in_arnhem_land.jpg?width=308&amp;height=205&amp;fit=crop&amp;format=jpg&amp;auto=webp 308w, https://images.northernterritory.com/v3/assets/blt0a1258326b2bae62/blt445cb4c828e2b571/633a31b73df1404a85022919/two_people_on_a_beach_in_arnhem_land.jpg?width=370&amp;height=247&amp;fit=crop&amp;format=jpg&amp;auto=webp 370w"
          />
        </div>
        <div className="deal__copy">
          <h3 className="deal__kicker">Save up to $1,260* per couple</h3>
          <h4 className="deal__title">Christmas Wilderness Escape</h4>
          <p className="deal__info">7 nights from $5,665pp*</p>
        </div>
      </div>

      <div className="grid-x grid-margin-x deal__cta-logo__wrapper">
        <div className="cell small-8">
          <div className="deal__cta brand-button">Get offer</div>
        </div>
        <div className="cell small-4 deal__logo">
          <img
            className=""
            alt="outback spirit with white background"
            src="https://images.northernterritory.com/v3/assets/blt0a1258326b2bae62/blt74715352dee6dfd8/627c8bfc4886af2aa2bf5f12/outback_spirit_with_white_background.png"
          />
        </div>
      </div>

      <div className="grid-x grid-margin-x deal__tcs">
        <div className="cell">
          <small>*T&amp;Cs apply</small>
        </div>
      </div>
    </a>
  )
}

DealCard.defaultProps = defaultProps

export default DealCard
