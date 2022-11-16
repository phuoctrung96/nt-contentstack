import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../../Button/Button"

interface Props {}

const defaultProps = {}

const things_to_doSubMenu: React.FC<Props> = () => {
  return (
    <div className="primaryNav__subnav primaryNav__subnav--thingsToDo">
      <div className="grid-container">
        <div className="grid-x grid-margin-x small-up-4">
          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link
                to="/things-to-do/art-and-culture/aboriginal-culture"
                className="card__link"
              >
                <StaticImage
                  src="../../../images/nav/things_to_do/aboriginal_culture.jpg"
                  className="card__image"
                  alt="Aboriginal culture"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Aboriginal culture</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link
                to="/things-to-do/nature-and-wildlife/national-parks"
                className="card__link"
              >
                <StaticImage
                  src="../../../images/nav/things_to_do/national_parks.jpg"
                  className="card__image"
                  alt="National parks"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">National parks</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link to="/things-to-do/food-and-drink" className="card__link">
                <StaticImage
                  src="../../../images/nav/things_to_do/food_drink.jpg"
                  className="card__image"
                  alt="Food & drink"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Food & drink</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link
                to="/things-to-do/festivals-and-events"
                className="card__link"
              >
                <StaticImage
                  src="../../../images/nav/things_to_do/festivals_events.jpg"
                  className="card__image"
                  alt="Festivals & events"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Festivals & events</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link
                to="/things-to-do/outdoor-activities"
                className="card__link"
              >
                <StaticImage
                  src="../../../images/nav/things_to_do/outdoor_activities.jpg"
                  className="card__image"
                  alt="Outdoor activities"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Outdoor activities</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link
                to="/things-to-do/nature-and-wildlife"
                className="card__link"
              >
                <StaticImage
                  src="../../../images/nav/things_to_do/nature_wildlife.jpg"
                  className="card__image"
                  alt="Nature & wildlife"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Nature & wildlife</h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link to="/things-to-do/family-activities" className="card__link">
                <StaticImage
                  src="../../../images/nav/things_to_do/family_activities.jpg"
                  className="card__image"
                  alt="Family activities & attractions"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">
                  Family activities & attractions
                </h4>
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="cell">
            <div className="card navCard">
              <Link
                to="/things-to-do/outdoor-activities/fishing"
                className="card__link"
              >
                <StaticImage
                  src="../../../images/nav/things_to_do/fishing.jpg"
                  className="card__image"
                  alt="Fishing"
                  width={270}
                  height={180}
                  placeholder="blurred"
                  quality={95}
                />
                <h4 className="card__heading">Fishing</h4>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid-x grid-margin-x">
          <div className="cell text-center">
            <Button
              link={{ link: { url: "/plan" } }}
              label="More places to go"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

things_to_doSubMenu.defaultProps = defaultProps

export default things_to_doSubMenu
