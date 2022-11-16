import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { CSSTransition } from "react-transition-group"
import cx from "classnames"

import PrimaryMenu from "./PrimaryMenu"
import SecondaryMenu from "./SecondaryMenu"
import MobileMenu from "../../Nav/Mobile/MobileMenu"

import useCurrentWidth from "../../../hooks/useCurrentWidth"
import useScroll from "../../../hooks/useScroll"

interface Props {
  location: Location
}

const defaultProps = {}

const Header: React.FC<Props> = props => {
  // hooks
  const screenWidth = useCurrentWidth()
  const { scrollY } = useScroll()

  // state
  const [sticky, setSticky] = useState(false)
  const [mobMenuOpen, setMobMenuOpen] = useState(false)

  // effects
  useEffect(() => {
    if (mobMenuOpen && screenWidth > 640) setMobMenuOpen(false)
  }, [screenWidth])

  useEffect(() => {
    setSticky(scrollY > 300)
  }, [scrollY])

  useEffect(() => {
    setMobMenuOpen(false)
  }, [props.location.pathname])

  // events
  const handleToggleMobMenu = () => {
    setMobMenuOpen(!mobMenuOpen)
  }

  const headerClasses = cx({ sticky: sticky }, "hide-for-print")

  return (
    <>
      <header className={headerClasses}>
        <div className="grid-container" style={{ position: "relative" }}>
          <div className="grid-x grid-margin-x align-middle">
            {/* Logo */}
            <div className="cell shrink header__logo">
              <Link to="/" className="header__logoLink" title="Home">
                <svg viewBox="0 0 277 105">
                  <use href="#tntlogo-sun" />
                  <use href="#tntlogo-dots" />
                  <g fill="#fff" id="logofill">
                    <use href="#tntlogo-nt" />
                    <use href="#tntlogo-brolga" />
                  </g>
                </svg>
              </Link>
            </div>

            {/* Primary menu */}
            <PrimaryMenu location={props.location} />

            {/* Secondary menu */}
            <SecondaryMenu />

            {/* Mobile Nav */}
            <div className="cell shrink text-right hide-for-medium">
              <nav className="mobile-nav">
                <button
                  className={`mobile-nav__toggle ${
                    mobMenuOpen ? "active" : ""
                  }`}
                  onClick={handleToggleMobMenu}
                  aria-label="Toggle mobile menu"
                >
                  <div className="menuIcon">
                    <span className="menuIcon__inner">
                      <span className="menuIcon__lines" />
                    </span>
                  </div>
                  <span className="mobile-nav__toggle__label">Menu</span>
                </button>
              </nav>
            </div>
          </div>
        </div>

        <CSSTransition
          in={mobMenuOpen}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <MobileMenu />
        </CSSTransition>
      </header>
    </>
  )
}

Header.defaultProps = defaultProps

export default Header
