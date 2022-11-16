import React, { useState } from "react"
import { Link, navigate } from "gatsby"

interface Props {}

const defaultProps = {}

const SecondaryMenu: React.FC<Props> = () => {
  // state
  const [search, setSearch] = useState("")

  // event handlers
  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (search) {
      // navigate(`/search-results/?keyword=${search}`)
      alert(`search: ${search}`)
      setSearch("")
    }
  }

  return (
    <div className="cell auto medium-shrink secondaryNav">
      <nav>
        <ul className="nav__list">
          {/* Search */}
          <li className="nav__item nav__searchBar show-for-medium">
            <form onSubmit={handleSubmit}>
              <label className="nav__search">
                <span className="show-for-sr">Site Search</span>
                <input
                  type="search"
                  value={search}
                  name="keyword"
                  placeholder="Search"
                  className="nav__searchInput"
                  onChange={handleChangeSearch}
                />
                <button className="nav__searchBtn">
                  <span className="show-for-sr">Search</span>
                  <i className="svg-icon svg-search icon-white"></i>
                </button>
              </label>
            </form>
          </li>

          {/* Map */}
          <li className="nav__item map show-for-medium">
            <Link to="/map" className="nav__link global-view-map">
              <div className="nav__icon">
                <i className="svg-icon svg-map-pin-icon-white"></i>
              </div>
              <div className="nav__text">Map</div>
            </Link>
          </li>

          {/* Wishlist */}
          <li
            className="nav__item wishlist"
            data-hint='<h3>You added an experience to your trip!</h3>
<p>Use this site to find more experiences and <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" style="fill:#c91a51;stroke:#fff;width:1.5em;height:1.5em;margin:0 0.2em 0.2em 0.2em;"><use xlink:href="#heart"></use></svg> them.</p>
<p>Then you can organize them into your perfect NT holiday.</p>
<p>When done, you can easily <strong>share</strong> or <strong>print</strong> your trip.</p>'
            data-hintbuttonlabel="OK!"
            data-hintposition="bottom-middle"
          >
            <Link to="/my-trip" className="nav__link">
              <div className="nav__icon">
                <i className="svg-icon svg-heart-o-icon-white"></i>
                <i className="wishlist__badge">0</i>
              </div>
              <div className="nav__text">My trip</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

SecondaryMenu.defaultProps = defaultProps

export default SecondaryMenu
