import React, { useState } from "react"
import { Link } from "gatsby"

import MobileMenuAccordion from "./MobileMenuAccordion"

interface Props {}

const defaultProps = {}

const mobileMenu = [
  {
    label: "Home",
    link: "/",
    items: [],
  },
  {
    label: "Places to go",
    link: undefined,
    items: [
      {
        label: "Most popular places",
        link: undefined,
        items: [
          {
            label: "Darwin",
            link: "/darwin-and-surrounds/destinations/darwin",
            items: [],
          },
          {
            label: "Alice Springs",
            link: "/alice-springs-and-surrounds/destinations/alice-springs",
            items: [],
          },
          {
            label: "Uluru / Ayers Rock",
            link: "/uluru-and-surrounds/destinations/uluru",
            items: [],
          },
          {
            label: "Kakadu National Park",
            link: "/kakadu-and-surrounds/destinations/kakadu-national-park",
            items: [],
          },
          {
            label: "Litchfield National Park",
            link: "/darwin-and-surrounds/destinations/litchfield-national-park",
            items: [],
          },
          {
            label: "Kings Canyon & Watarrka National Park",
            link: "/uluru-and-surrounds/destinations/watarrka-national-park",
            items: [],
          },
          {
            label: "Tiwi Islands",
            link: "/darwin-and-surrounds/destinations/tiwi-islands",
            items: [],
          },
          {
            label: "East Arnhem Land",
            link: "/arnhem-land/destinations/east-arnhem-land",
            items: [],
          },
          {
            label: "Mataranka",
            link: "/katherine-and-surrounds/destinations/mataranka-thermal-pool",
            items: [],
          },
          {
            label: "Nitmiluk National Park",
            link: "/katherine-and-surrounds/destinations/nitmiluk-national-park",
            items: [],
          },
          {
            label: "Karlu Karlu / Devils Marbles",
            link: "/tennant-creek-and-barkly-region/destinations/karlu-karlu--devils-marbles-conservation-reserve",
            items: [],
          },
          {
            label: "Maguk",
            link: "/kakadu-and-surrounds/destinations/maguk",
            items: [],
          },
          {
            label: "Tennant Creek",
            link: "/tennant-creek-and-barkly-region/destinations/tennant-creek",
            items: [],
          },
          {
            label: "Tjoritja West MacDonnell Ranges",
            link: "/alice-springs-and-surrounds/destinations/tjoritja--west-macdonnell-national-park",
            items: [],
          },
        ],
      },
      {
        label: "Explore by region",
        link: undefined,
        items: [
          {
            label: "Darwin & Surrounds",
            link: "/darwin-and-surrounds",
            items: [],
          },
          {
            label: "Alice Springs & Surrounds",
            link: "/alice-springs-and-surrounds",
            items: [],
          },
          {
            label: "Uluru & Surrounds",
            link: "/uluru-and-surrounds",
            items: [],
          },
          {
            label: "Kakadu & Surrounds",
            link: "/kakadu-and-surrounds",
            items: [],
          },
          {
            label: "Katherine & Surrounds",
            link: "/katherine-and-surrounds",
            items: [],
          },
          {
            label: "Arnhem Land",
            link: "/arnhem-land",
            items: [],
          },
          {
            label: "Tennant Creek & Barkly Region",
            link: "/tennant-creek-and-barkly-region",
            items: [],
          },
        ],
      },
    ],
  },
  {
    label: "Things to do ",
    link: undefined,
    items: [
      {
        label: "Aboriginal culture",
        link: "/things-to-do/art-and-culture/aboriginal-culture",
        items: [],
      },
      {
        label: "National parks",
        link: "/things-to-do/nature-and-wildlife/national-parks",
        items: [],
      },
      {
        label: "Food & drink",
        link: "/things-to-do/food-and-drink",
        items: [],
      },
      {
        label: "Festivals & events",
        link: "/things-to-do/festivals-and-events",
        items: [],
      },
      {
        label: "Outdoor activities",
        link: "/things-to-do/outdoor-activities",
        items: [],
      },
      {
        label: "Nature & wildlife",
        link: "/things-to-do/nature-and-wildlife",
        items: [],
      },
      {
        label: "Family activities & attractions",
        link: "/things-to-do/family-activities",
        items: [],
      },
      {
        label: "Fishing",
        link: "/things-to-do/outdoor-activities/fishing",
        items: [],
      },
    ],
  },
  {
    label: "Plan",
    link: undefined,
    items: [
      {
        label: "Accommodation",
        link: "/plan/accommodation",
        items: [],
      },
      {
        label: "Guided tours",
        link: "/tours",
        items: [],
      },
      {
        label: "Deals & offers",
        link: "/deals-and-offers",
        items: [],
      },
      {
        label: "Weather & seasons",
        link: "/plan/weather-and-seasons",
        items: [],
      },
      {
        label: "Transport & hire",
        link: "/plan/hire-and-transport",
        items: [],
      },
      {
        label: "Maps",
        link: "/plan/maps",
        items: [],
      },
      {
        label: "Getting here & around",
        link: "/plan/getting-here-and-around",
        items: [],
      },
      {
        label: "Visitor information centres",
        link: "/plan/visitor-information-centres",
        items: [],
      },
    ],
  },
  {
    label: "Trip ideas",
    link: undefined,
    items: [
      {
        label: "Latest articles",
        link: "/articles",
        items: [],
      },
      {
        label: "Itineraries",
        link: "/itineraries",
        items: [],
      },
      {
        label: "Road trips",
        link: "/drive",
        items: [],
      },
      {
        label: "Locals tips",
        link: "/articles/locals-tips",
        items: [],
      },
    ],
  },
  {
    label: "Map",
    link: "/map",
    items: [],
    icon: "map",
  },
]

const MobileMenu: React.FC<Props> = () => {
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
    <div className="mobNav hide-for-medium">
      {mobileMenu.map((menu, menuIndex) => (
        <MobMenuItem key={`menu_${menuIndex}`} {...menu} />
      ))}
      <div className="nav__searchBar">
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
      </div>
    </div>
  )
}

MobileMenu.defaultProps = defaultProps

export default MobileMenu

interface MobMenuItem {
  label: string
  link?: string
  items?: MobMenuItem[]
  icon?: string
}

interface MobMenuItemProps extends MobMenuItem {
  label: string
  link?: string
  items?: MobMenuItem[]
}

const MobMenuItem: React.FC<MobMenuItemProps> = props => {
  if (props.link)
    return (
      <Link to={props.link} className="mobMenu__link">
        {props.icon === "map" && (
          <i
            className="svg-icon svg-map-pin-icon-white"
            style={{ marginRight: 10, float: "none", verticalAlign: "bottom" }}
          />
        )}
        {props.label}
      </Link>
    )

  return (
    <MobileMenuAccordion heading={props.label} cssClass="mobMenu__accordion">
      <>
        {props.items?.map((menu, menuIndex) => (
          <MobMenuItem key={`menu_${menuIndex}`} {...menu} />
        ))}
      </>
    </MobileMenuAccordion>
  )
}
