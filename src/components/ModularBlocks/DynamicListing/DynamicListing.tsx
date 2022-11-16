import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import SectionHeader from "../SectionHeader"
import AccomFilter from "./Filters/AccomFilter"
import BudgetFilter from "./Filters/BudgetFilter"
import RatingFilter from "./Filters/RatingFilter"
import ListingResults from "./ListingResults"

import { DynamicListingModule } from "../../../models/modules"
import { ATDWProductModel } from "../../../models/common"
import { buildQuerySet, queryAtdwProducts } from "../../../utils/utils_query"

interface Props extends DynamicListingModule {}

const defaultProps = {}

interface ListingDataModel {
  initialItems?: ATDWProductModel[]
  filteredItems?: ATDWProductModel[]
  results?: ATDWProductModel[]
  page?: number
  loading?: boolean
}

const DynamicListing: React.FC<Props> = props => {
  // console.log("DynamicListing: ", props)

  const query = useStaticQuery(
    graphql`
      query {
        allAtdwProducts {
          nodes {
            productId
            productserviceId
            status
            productName
            productCategoryId
            verticalClassifications
            region
            subregion
            path
            thumbnail
            tags
          }
        }
      }
    `
  )

  // state
  const [selected, setSelected] = useState<string[]>([])

  const [listingData, setListingData] = useState<ListingDataModel>({
    initialItems: undefined,
    filteredItems: [],
    results: undefined,
    page: undefined,
    loading: true,
  })

  // defaults values
  const initialLoad = props.initial_number_of_rows || 1
  const pageLoad = props.number_of_rows_per_page || 5

  /****************************************************
    Effects
  ****************************************************/
  useEffect(() => {
    if (!props.set && query.allAtdwProducts.nodes.length === 0) {
      setListingData({
        initialItems: [],
        filteredItems: [],
        results: [],
        page: 0,
        loading: false,
      })
    } else {
      console.log("=======================")
      console.log("props.include_items: ", props.include_items)
      console.log("props.exclude_items: ", props.exclude_items)
      console.log("props.keywords: ", props.keywords)
      console.log("props.order_by: ", props.order_by)
      console.log("props.set: ", props.set)

      const querySet = buildQuerySet(props.set)
      console.log("querySet: ", querySet)

      const list = queryAtdwProducts(query.allAtdwProducts.nodes, querySet)
      console.log("list: ", list)
      console.log("=======================")
      setListingData({ ...listingData, initialItems: list })
    }
  }, [props.set, query.allAtdwProducts.nodes])

  useEffect(() => {
    if (listingData.initialItems) {
      // apply filtering
      const filtered = listingData.initialItems

      const itemCount = initialLoad * pageLoad
      setListingData({
        ...listingData,
        filteredItems: filtered,
        results: filtered.slice(0, itemCount),
        page: 0,
        loading: false,
      })
    }
  }, [selected, listingData.initialItems])

  useEffect(() => {
    console.log("listingData: ", listingData)
  }, [listingData])

  /****************************************************
    Events
  ****************************************************/
  // update filter values
  const toggleSelect = (value: string) => {
    if (selected.indexOf(value) === -1) setSelected([...selected, value])
    else setSelected(selected.filter(x => x !== value))
  }

  // update page number
  const nextPage = () => {
    const pageNumber = (listingData.page || 0) + 1
    const itemCount = pageNumber * pageLoad + initialLoad * pageLoad
    setListingData({
      ...listingData,
      results: listingData.filteredItems?.slice(0, itemCount),
      page: pageNumber,
    })
  }

  return (
    <section
      className={`dynamicListing ${
        props.add_highlight ? "section--highlighted" : ""
      }`}
    >
      <div className="grid-container">
        <SectionHeader heading={props.heading} intro={props.intro_paragraph} />

        {props.show_sub_filters && (
          <div className="listing__filters">
            <div className="grid-x grid-margin-x">
              <AccomFilter selected={selected} toggleSelect={toggleSelect} />
              <RatingFilter selected={selected} toggleSelect={toggleSelect} />
              <BudgetFilter selected={selected} toggleSelect={toggleSelect} />
            </div>
          </div>
        )}

        {listingData.loading && (
          <div className="listing__loading">
            <i className="loader" />
          </div>
        )}

        {!listingData.loading && (
          <ListingResults
            results={listingData.results || []}
            hasMore={
              (listingData.results || []).length <
              (listingData.filteredItems || []).length
            }
            nextPage={nextPage}
            disableMyTrip={props.disable_add_to_trip}
          />
        )}
      </div>
    </section>
  )
}

DynamicListing.defaultProps = defaultProps

export default DynamicListing
