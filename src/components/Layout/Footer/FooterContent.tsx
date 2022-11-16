import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Icon from "../../Icon"

import { NavMenuModel } from "../../../models/nav"

interface Props {}

const defaultProps = {}

const footerMenu = [
  {
    label: "Plan your NT trip",
    items: [
      { label: "Accommodation", link: "/plan/accommodation", newTab: false },
      {
        label: "Weather & seasons",
        link: "/plan/weather-and-seasons",
        newTab: false,
      },
      {
        label: "Festivals & events",
        link: "/things-to-do/festivals-and-events",
        newTab: false,
      },
      {
        label: "Itineraries",
        link: "/itineraries",
        newTab: false,
      },
    ],
  },
  {
    label: "Find out more",
    items: [
      {
        label: "Contact us",
        link: "/find-out-more/contact-us",
        newTab: false,
      },
      {
        label: "Subscribe",
        link: "/find-out-more/subscribe",
        newTab: false,
      },
      {
        label: "Privacy",
        link: "/find-out-more/privacy",
        newTab: false,
      },
      {
        label: "Terms & conditions",
        link: "/find-out-more/terms-of-use",
        newTab: false,
      },
      {
        label: "Sitemap",
        link: "/find-out-more/sitemap",
        newTab: false,
      },
    ],
  },
  {
    label: "Other sites",
    items: [
      {
        label: "Industry & media",
        link: "http://www.tourismnt.com.au/",
        newTab: true,
      },
      {
        label: "Business events",
        link: "http://www.ntconventions.com.au/",
        newTab: true,
      },
      {
        label: "Tourism Top End",
        link: "http://www.tourismtopend.com.au/",
        newTab: true,
      },
      {
        label: "Tourism Central Australia",
        link: "http://www.discovercentralaustralia.com.au/",
        newTab: true,
      },
    ],
  },
]

const FooterContent: React.FC<Props> = () => {
  // // graphQL
  // const query = useStaticQuery(graphql`
  //   query {
  //     menu: contentstackConfig(code_id: { eq: "footerMenu" }) {
  //       ...ConfigFields
  //     }
  //   }
  // `)
  // const nav: NavMenuModel[] = query.menu?.navigation || []

  // if (!nav || nav.length === 0) return null

  // const menu: NavMenuModel = nav[0]
  // console.log("Footer menu: ", menu)

  return (
    <div className="footer__content">
      <div className="grid-container">
        {/* Menus */}
        <div className="grid-x grid-margin-x">
          {footerMenu.map((column, col_index) => (
            <div
              key={`footerCol_${col_index}`}
              className="cell small-6 medium-4 large-3"
            >
              <h4>{column.label}</h4>
              <ul className="footer__nav">
                {column.items.map((item, item_index) => (
                  <li
                    key={`footerItem_${col_index}_${item_index}`}
                    className="footer__navItem"
                  >
                    {item.newTab && (
                      <a
                        href={item.link}
                        className="footer__navLink"
                        target="_blank"
                        rel="noopener"
                      >
                        {item.label}
                      </a>
                    )}

                    {!item.newTab && (
                      <Link to={item.link} className="footer__navLink">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* {menu.items?.map(item => (
            <div key={item.uid} className="cell small-6 medium-4 large-3">
              <h4>{item.title}</h4>
              <ul className="footer__nav">
                <li className="footer__navItem">
                  <Link to="/plan/accommodation" className="footer__navLink">
                    Accommodation
                  </Link>
                </li>
                <li className="footer__navItem">
                  <Link
                    to="/plan/weather-and-seasons"
                    className="footer__navLink"
                  >
                    Weather &amp; seasons
                  </Link>
                </li>
              </ul>
            </div>
          ))} */}

          {/* Social Links */}
          <div className="cell large-3">
            <h4 className="show-for-large">Follow us</h4>
            <ul className="footer__social">
              <li className="footer__socialItem">
                <a
                  href="https://l.northernterritory.com/facebook"
                  className="footer__socialLink"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="show-for-sr">Facebook</span>
                  <i className="svg-icon svg-facebook-official icon-white" />
                </a>
              </li>
              <li className="footer__socialItem">
                <a
                  href="http://l.northernterritory.com/instagram"
                  className="footer__socialLink"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="show-for-sr">Instagram</span>
                  <i className="svg-icon svg-instagram icon-white" />
                </a>
              </li>
              <li className="footer__socialItem">
                <a
                  href="https://l.northernterritory.com/twitter"
                  className="footer__socialLink"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="show-for-sr">Twitter</span>
                  <i className="svg-icon svg-twitter icon-white" />
                </a>
              </li>
              <li className="footer__socialItem">
                <a
                  href="https://l.northernterritory.com/youtube"
                  className="footer__socialLink"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="show-for-sr">YouTube</span>
                  <i className="svg-icon svg-youtube icon-white" />
                </a>
              </li>
              <li className="footer__socialItem">
                <a
                  href="https://l.northernterritory.com/tripadvisor"
                  className="footer__socialLink"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="show-for-sr">Trip Advisor</span>
                  <i className="svg-icon svg-tripadvisor icon-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid-x grid-margin-x">
          <div className="cell auto">
            <div className="footer__aoc">
              <h3 className="show-for-large">Acknowledgement of Country</h3>
              <div className="footer__aocText">
                <p>
                  We respectfully acknowledge and honour the Aboriginal people
                  of the Northern Territory and recognise the continuation of
                  culture, connection to lands, water and country. We pay our
                  respects to Elders past, present and future.
                </p>
                <a href="/things-to-do/art-and-culture/aboriginal-culture">
                  Read more <Icon name="angle-right" color="#fff" />
                </a>
              </div>
            </div>
          </div>
          <nav className="cell medium-auto">
            <div className="footer__language">
              <h2 className="show-for-sr">Translations of this page</h2>
              <select>
                <option value="">English</option>
              </select>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

FooterContent.defaultProps = defaultProps

export default FooterContent
