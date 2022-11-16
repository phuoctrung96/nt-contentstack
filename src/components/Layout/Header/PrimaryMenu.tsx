import React, { useState, useEffect, useRef } from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { CSSTransition } from "react-transition-group"

import PlacesSubMenu from "../../Nav/Desktop/PlacesSubMenu"
import ToDoSubMenu from "../../Nav/Desktop/ToDoSubMenu"
import PlanSubMenu from "../../Nav/Desktop/PlanSubMenu"
import TripSubMenu from "../../Nav/Desktop/TripSubMenu"

import useOnClickOutside from "../../../hooks/useOnClickOutside"
import { useCurrentWidth } from "../../../hooks/useCurrentWidth"
// import { NavMenuModel } from "../../models/nav"

interface Props {
  location: Location
}

const defaultProps = {}

const mainMenu = [
  {
    label: "Places to go",
    subMenu: PlacesSubMenu,
  },
  {
    label: "Things to do",
    subMenu: ToDoSubMenu,
  },
  {
    label: "Plan",
    subMenu: PlanSubMenu,
  },
  {
    label: "Trip ideas",
    subMenu: TripSubMenu,
  },
]

const PrimaryMenu: React.FC<Props> = props => {
  // state
  const [activeIndex, setActiveIndex] = useState(-1)

  // refs
  const menuRef = useRef<HTMLDivElement>(null)

  // hooks
  const width = useCurrentWidth()

  // close menu on mobile
  useEffect(() => {
    if (activeIndex >= 0 && width < 640) setActiveIndex(-1)
  }, [width, activeIndex])

  useEffect(() => {
    setActiveIndex(-1)
  }, [props.location.pathname])

  // events
  const toggleMenu = (index: number) => {
    if (activeIndex !== index) setActiveIndex(index)
    else setActiveIndex(-1)
  }

  // close menu on click outside
  const handleClickOutside = () => setActiveIndex(-1)
  useOnClickOutside(menuRef, handleClickOutside)

  return (
    <div className="cell auto show-for-medium primaryNav" ref={menuRef}>
      <nav>
        <h2 className="show-for-sr">Main navigation</h2>
        <ul className="nav__list">
          {mainMenu.map((item, index) => (
            <li key={`menuItem_${index}`} className="nav__item">
              <button
                className={`nav__link ${index === activeIndex ? "active" : ""}`}
                onClick={() => toggleMenu(index)}
              >
                {item.label}
              </button>
              <CSSTransition
                key={`subNav_${index}`}
                in={index === activeIndex}
                timeout={300}
                classNames="menu"
                unmountOnExit
              >
                <item.subMenu />
              </CSSTransition>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

PrimaryMenu.defaultProps = defaultProps

export default PrimaryMenu

// const PrimaryMenu: React.FC<Props> = () => {
//   // graphQL
//   const query = useStaticQuery(graphql`
//     query {
//       menu: contentstackConfig(code_id: { eq: "mainMenu" }) {
//         ...ConfigFields
//       }
//     }
//   `)
//   const nav: NavMenuModel[] = query.menu?.navigation || []

//   // state
//   const [activeIndex, setActiveIndex] = useState(-1)

//   // refs
//   const menuRef = useRef<HTMLDivElement>(null)

//   if (!nav || nav.length === 0) return null

//   const menu: NavMenuModel = nav[0]
//   console.log("Main menu: ", menu)

//   // events
//   const toggleMenu = (index: number) => {
//     if (activeIndex !== index) setActiveIndex(index)
//     else setActiveIndex(-1)
//   }

//   // close menu on click outside
//   const handleClickOutside = () => setActiveIndex(-1)
//   useOnClickOutside(menuRef, handleClickOutside)

//   return (
//     <div className="cell auto show-for-medium primaryNav" ref={menuRef}>
//       <nav>
//         <h2 className="show-for-sr">Main navigation</h2>
//         <ul className="nav__list">
//           {menu.items?.map((item, index) => (
//             <li key={item.uid} className="nav__item">
//               <button
//                 className={`nav__link ${index === activeIndex ? "active" : ""}`}
//                 onClick={() => toggleMenu(index)}
//               >
//                 {item.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   )
// }
