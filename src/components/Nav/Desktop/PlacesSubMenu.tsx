import React from "react"

import Button from "../../Button/Button"

interface Props {}

const defaultProps = {}

const PlacesSubMenu: React.FC<Props> = () => {
  return (
    <div className="primaryNav__subnav primaryNav__subnav--places">
      <div className="grid-container">
        <div className="grid-x grid-margin-x align-justify">
          {/* Places */}
          <div className="cell small-8 xlarge-6">
            <h3>Most popular places</h3>
            <ul className="places__popular" role="menu">
              <li>
                <a
                  href="/darwin-and-surrounds/destinations/darwin"
                  data-pin-x="16.59"
                  data-pin-y="-9.25"
                  target=""
                >
                  Darwin
                </a>
              </li>
              <li>
                <a
                  href="/alice-springs-and-surrounds/destinations/alice-springs"
                  data-pin-x="56.98"
                  data-pin-y="147.75"
                  target=""
                >
                  Alice Springs
                </a>
              </li>
              <li>
                <a
                  href="/uluru-and-surrounds/destinations/uluru"
                  data-pin-x="18.53"
                  data-pin-y="170.27"
                  target=""
                >
                  Uluru / Ayers Rock
                </a>
              </li>
              <li>
                <a
                  href="/kakadu-and-surrounds/destinations/kakadu-national-park"
                  data-pin-x="38.38"
                  data-pin-y="-6.38"
                  target=""
                >
                  Kakadu National Park
                </a>
              </li>
              <li>
                <a
                  href="/darwin-and-surrounds/destinations/litchfield-national-park"
                  data-pin-x="16.37"
                  data-pin-y="-3.74"
                  target=""
                >
                  Litchfield National Park
                </a>
              </li>
              <li>
                <a
                  href="/uluru-and-surrounds/destinations/watarrka-national-park"
                  data-pin-x="26.26"
                  data-pin-y="155.75"
                  target=""
                >
                  Kings Canyon &amp; Watarrka National Park
                </a>
              </li>
              <li>
                <a
                  href="/darwin-and-surrounds/destinations/tiwi-islands"
                  data-pin-x="13.93"
                  data-pin-y="-18.84"
                  target=""
                >
                  Tiwi Islands
                </a>
              </li>
              <li>
                <a
                  href="/arnhem-land/destinations/east-arnhem-land"
                  data-pin-x="95.44"
                  data-pin-y="-13.09"
                  target=""
                >
                  East Arnhem Land
                </a>
              </li>
              <li>
                <a
                  href="/katherine-and-surrounds/destinations/mataranka-thermal-pool"
                  data-pin-x="47"
                  data-pin-y="24.28"
                  target=""
                >
                  Mataranka
                </a>
              </li>
              <li>
                <a
                  href="/katherine-and-surrounds/destinations/nitmiluk-national-park"
                  data-pin-x="37.63"
                  data-pin-y="16.04"
                  target=""
                >
                  Nitmiluk National Park
                </a>
              </li>
              <li>
                <a
                  href="/tennant-creek-and-barkly-region/destinations/karlu-karlu--devils-marbles-conservation-reserve"
                  data-pin-x="61.98"
                  data-pin-y="102.89"
                  target=""
                >
                  Karlu Karlu / Devils Marbles
                </a>
              </li>
              <li>
                <a
                  href="/kakadu-and-surrounds/destinations/maguk"
                  data-pin-x="38.82"
                  data-pin-y="0.55"
                  target=""
                >
                  Maguk
                </a>
              </li>
              <li>
                <a
                  href="/alice-springs-and-surrounds/destinations/tjoritja--west-macdonnell-national-park"
                  data-pin-x="54.98"
                  data-pin-y="148.04"
                  target=""
                >
                  Tjoritja West MacDonnell Ranges
                </a>
              </li>
              <li>
                <Button
                  link={{ link: { url: "/places-to-go" } }}
                  label="More places to go"
                />
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="cell small-4 xlarge-3 show-for-xlarge">
            <div className="svg-container ratio--region-map">
              <svg
                id="navmap-regions"
                viewBox="0 0 129 216"
                width="52.04"
                height="87.43"
                style={{ overflow: "visible" }}
              >
                <svg
                  x="-282"
                  y="-71"
                  width="703"
                  height="660"
                  viewBox="0 0 270 270"
                  opacity="0.15"
                >
                  <g
                    id="navmap-aus"
                    stroke="#1f1f5f"
                    fill="none"
                    strokeWidth="1.4"
                  >
                    <use xlinkHref="#regionmap-aus"></use>
                  </g>
                </svg>
                <g id="navmap-strokes" fill="#FFFFFF">
                  <use
                    id="#regionmap-strokes"
                    xlinkHref="#regionmap-strokes"
                  ></use>{" "}
                </g>
                <g id="navmap-darwin" fill="#05A0BD">
                  <use xlinkHref="#regionmap-darwin"></use>
                </g>
                <g id="navmap-katherine" fill="#7D7737">
                  <use xlinkHref="#regionmap-katherine"></use>
                </g>
                <g id="navmap-tennant" fill="#D77F00">
                  <use xlinkHref="#regionmap-tennant"></use>
                </g>
                <g id="navmap-kakadu" fill="#7D9F1F">
                  <use xlinkHref="#regionmap-kakadu"></use>
                </g>
                <g id="navmap-arnhem" fill="#4B764D">
                  <use xlinkHref="#regionmap-arnhem"></use>
                </g>
                <g id="navmap-alice" fill="#CB3E0B">
                  <use xlinkHref="#regionmap-alice"></use>
                </g>
                <g id="navmap-uluru" fill="#9D0E13">
                  <use xlinkHref="#regionmap-uluru"></use>
                </g>
                <svg
                  id="navmap-pin"
                  x="95.44"
                  y="-13.09"
                  width="21"
                  height="30"
                  viewBox="0 0 7 10"
                  style={{ overflow: "visible", display: "none" }}
                >
                  <ellipse
                    fill="#FFF"
                    cx="3.5"
                    cy="9.5"
                    rx=".6"
                    ry=".3"
                    className="pin-pulse"
                    data-svg-origin="3.5 9.5"
                    transform="matrix(9,0,0,9,-28,-76)"
                    style={{ transformOrigin: "0px 0px 0px", opacity: 0 }}
                  ></ellipse>
                  <use xlinkHref="#map-pin"></use>
                </svg>
              </svg>
            </div>
          </div>

          {/* Regions */}
          <div className="cell small-4 xlarge-3 ">
            <h3>Explore by region</h3>
            <ul className="places__regions" role="menu">
              <li>
                <a
                  href="/darwin-and-surrounds"
                  data-pin-x="16.7"
                  data-pin-y="-9.28"
                  target=""
                >
                  Darwin &amp; Surrounds
                </a>
              </li>
              <li>
                <a
                  href="/alice-springs-and-surrounds"
                  data-pin-x="56.94"
                  data-pin-y="147.74"
                  target=""
                >
                  Alice Springs &amp; Surrounds
                </a>
              </li>
              <li>
                <a
                  href="/uluru-and-surrounds"
                  data-pin-x="19.1"
                  data-pin-y="171.88"
                  target=""
                >
                  Uluru &amp; Surrounds
                </a>
              </li>
              <li>
                <a
                  href="/kakadu-and-surrounds"
                  data-pin-x="38.38"
                  data-pin-y="-6.38"
                  target=""
                >
                  Kakadu &amp; Surrounds
                </a>
              </li>
              <li>
                <a
                  href="/katherine-and-surrounds"
                  data-pin-x="35.6"
                  data-pin-y="17.84"
                  target=""
                >
                  Katherine &amp; Surrounds
                </a>
              </li>
              <li>
                <a
                  href="/arnhem-land"
                  data-pin-x="68.07"
                  data-pin-y="1.79"
                  target=""
                >
                  Arnhem Land
                </a>
              </li>
              <li>
                <a
                  href="/tennant-creek-and-barkly-region"
                  data-pin-x="61.04"
                  data-pin-y="89.94"
                  target=""
                >
                  Tennant Creek &amp; Barkly Region
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

PlacesSubMenu.defaultProps = defaultProps

export default PlacesSubMenu
