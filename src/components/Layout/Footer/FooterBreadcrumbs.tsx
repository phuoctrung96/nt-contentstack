import React from "react"
import { Link } from "gatsby"

import { useSelector } from "react-redux"
import { siteSelector } from "../../../state/site"

import Icon from "../../Icon"

interface Props {}

const defaultProps = {}

const FooterBreadcrumbs: React.FC<Props> = () => {
  // redux
  const site = useSelector(siteSelector)

  return (
    <div className="footer__breadcrumbs">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <div className=" breadcrumbs">
              <h2 className="breadcrumbs__heading show-for-large">
                You are here:
              </h2>
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                  <Icon name="angle-right" color="#fff" />
                </li>

                {site.breadcrumbs?.map(page => (
                  <li key={page.id} className="breadcrumbs__item">
                    <Link to={page.url}>
                      <span>{page.label}</span>
                    </Link>
                    <Icon name="angle-right" color="#fff" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FooterBreadcrumbs.defaultProps = defaultProps

export default FooterBreadcrumbs
