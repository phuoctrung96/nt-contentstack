import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../../Button/Button"

interface Props {}

const defaultProps = {}

const TripSubMenu: React.FC<Props> = () => {
  return (
    <div className="primaryNav__subnav primaryNav__subnav--trip">
      <div className="grid-container">
        <div className="grid-x grid-margin-x small-up-4">
          {/* Latest articles */}
          <div className="cell auto">
            <div className="card navLinksCard">
              <div className=" grid-y card__inner">
                <div className="cell shrink">
                  <StaticImage
                    src="../../../images/nav/trip_ideas/latest_articles.jpg"
                    className="card__image"
                    alt="Latest articles"
                    width={195}
                    height={130}
                    placeholder="blurred"
                    quality={95}
                  />
                  <h3 className="card__heading">Latest articles</h3>
                </div>
                <div className="cell auto">
                  <ul role="menu">
                    <li>
                      <Link to="/articles/top-10-things-to-do-around-darwin">
                        ​Top 10 things to do around Darwin
                      </Link>
                    </li>
                    <li>
                      <Link to="/articles/top-10-things-to-do-around-uluru">
                        ​Top 10 things to do around Uluru
                      </Link>
                    </li>
                    <li>
                      <Link to="/articles/top-10-things-to-do-around-alice-springs">
                        ​​Top 10 things to do around Alice Springs
                      </Link>
                    </li>
                    <li>
                      <Link to="/articles/7-superb-places-to-dine-out-in-darwin">
                        7 superb places to dine out in Darwin
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="cell shrink">
                  <Button
                    link={{ link: { url: "/articles" } }}
                    label="More articles"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Itineraries */}
          <div className="cell auto" style={{ height: "auto" }}>
            <div className="card navLinksCard">
              <div className=" grid-y card__inner">
                <div className="cell shrink">
                  <StaticImage
                    src="../../../images/nav/trip_ideas/itineraries.jpg"
                    className="card__image"
                    alt="Itineraries"
                    width={195}
                    height={130}
                    placeholder="blurred"
                    quality={95}
                  />
                  <h3 className="card__heading">Itineraries</h3>
                </div>
                <div className="cell auto">
                  <ul role="menu">
                    <li>
                      <Link
                        to="/articles/kids-on-board-a-red-centre-road-trip-the-whole-family-will-enjoy"
                        target=""
                      >
                        Kids on board: A Red Centre road trip for the family
                      </Link>
                    </li>
                    <li>
                      <Link to="/itineraries/alice-springs-in-3-days" target="">
                        Alice Springs &amp; Surrounds 3 day itinerary
                      </Link>
                    </li>
                    <li>
                      <Link to="/itineraries/kakadu-in-48-hours" target="">
                        Kakadu in 48 hours
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/itineraries/darwin-and-surrounds-in-3-days"
                        target=""
                      >
                        Darwin &amp; Surrounds 3 day itinerary
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="cell shrink">
                  <Button
                    link={{ link: { url: "/itineraries" } }}
                    label="More itineraries"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Road trips */}
          <div className="cell auto" style={{ height: "auto" }}>
            <div className="card navLinksCard">
              <div className=" grid-y card__inner">
                <div className="cell shrink">
                  <StaticImage
                    src="../../../images/nav/trip_ideas/road_trips.jpg"
                    className="card__image"
                    alt="Road trips"
                    width={195}
                    height={130}
                    placeholder="blurred"
                    quality={95}
                  />
                  <h3 className="card__heading">Road trips</h3>
                </div>
                <div className="cell auto">
                  <ul role="menu">
                    <li>
                      <Link to="/drive/explorers-way" target="">
                        Explorers Way: Drive Adelaide to Darwin
                      </Link>
                    </li>
                    <li>
                      <Link to="/drive/natures-way" target="">
                        Nature’s Way: Darwin to Kakadu, Katherine &amp;
                        Litchfield
                      </Link>
                    </li>
                    <li>
                      <Link to="/drive/red-centre-way" target="">
                        Red Centre Way: Alice Springs to Uluru &amp; Kings
                        Canyon
                      </Link>
                    </li>
                    <li>
                      <Link to="/drive/binns-track" target="">
                        Binns Track
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="cell shrink">
                  <Button
                    link={{ link: { url: "/drive" } }}
                    label="More road trips"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Local's tips */}
          <div className="cell auto" style={{ height: "auto" }}>
            <div className="card navLinksCard">
              <div className=" grid-y card__inner">
                <div className="cell shrink">
                  <StaticImage
                    src="../../../images/nav/trip_ideas/locals_tips.jpg"
                    className="card__image"
                    alt="Local’s tips"
                    width={195}
                    height={130}
                    placeholder="blurred"
                    quality={95}
                  />
                  <h3 className="card__heading">Local’s tips</h3>
                </div>
                <div className="cell auto">
                  <ul role="menu">
                    <li>
                      <Link to="/articles/top-end-locals-tips" target="">
                        Top End Local’s Tips
                      </Link>
                    </li>
                    <li>
                      <Link to="/articles/red-centre-locals-tips" target="">
                        Red Centre Local’s Tips
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/articles/red-centre-locals-tips-food-and-nightlife-in-alice-springs"
                        target=""
                      >
                        Red Centre Local’s Tips: Food and nightlife in Alice
                        Springs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/articles/a-locals-guide-for-darwin-to-katherine"
                        target=""
                      >
                        Top End Local’s Tips: Darwin to Katherine
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="cell shrink">
                  <Button
                    link={{ link: { url: "/articles/locals-tips" } }}
                    label="More local's tips"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

TripSubMenu.defaultProps = defaultProps

export default TripSubMenu
