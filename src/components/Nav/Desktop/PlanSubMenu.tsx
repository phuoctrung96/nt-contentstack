import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../../Button/Button"

interface Props {}

const defaultProps = {}

const PlanSubMenu: React.FC<Props> = () => {
  return (
    <div className="primaryNav__subnav primaryNav__subnav--plan">
      <div className="grid-container">
        <div className="grid-x grid-margin-x small-up-4">
          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link to="/plan/accommodation" className="card__link">
                <StaticImage
                  src="../../../images/nav/plan/accommodation.jpg"
                  className="card__image"
                  alt="Accommodation"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Accommodation</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link to="/tours" className="card__link">
                <StaticImage
                  src="../../../images/nav/plan/guided_tours.jpg"
                  className="card__image"
                  alt="Guided tours"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Guided tours</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link to="/deals-and-offers" className="card__link">
                <StaticImage
                  src="../../../images/nav/plan/deals_offers.jpg"
                  className="card__image"
                  alt="Deals & offers"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Deals & offers</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link to="/plan/weather-and-seasons" className="card__link">
                <StaticImage
                  src="../../../images/nav/plan/weather_seasons.jpg"
                  className="card__image"
                  alt="Weather & seasons"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Weather & seasons</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link to="/plan/hire-and-transport" className="card__link">
                <StaticImage
                  src="../../../images/nav/plan/transport_hire.jpg"
                  className="card__image"
                  alt="Transport & hire"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Transport & hire</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link to="/plan/maps" className="card__link">
                <StaticImage
                  src="../../../images/nav/plan/maps.jpg"
                  className="card__image"
                  alt="Maps"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Maps</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link to="/plan/getting-here-and-around" className="card__link">
                <StaticImage
                  src="../../../images/nav/plan/getting_here.jpg"
                  className="card__image"
                  alt="Getting here & around"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Getting here & around</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link
                to="/plan/visitor-information-centres"
                className="card__link"
              >
                <StaticImage
                  src="../../../images/nav/plan/visitor_info.jpg"
                  className="card__image"
                  alt="Visitor information centres"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Visitor information centres</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid-x grid-margin-x">
          <div className="cell text-center">
            <Button link={{ link: { url: "/plan" } }} label="Plan your trip" />
          </div>
        </div>
      </div>
    </div>
  )
}

PlanSubMenu.defaultProps = defaultProps

export default PlanSubMenu
