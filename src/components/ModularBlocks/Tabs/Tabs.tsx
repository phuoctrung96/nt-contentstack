import React, { useState, useEffect } from "react"
import useCurrentWidth from "../../../hooks/useCurrentWidth"

import TabAccordion from "./TabAccordion"
import TabPanels from "./TabPanels"

import { TabsModule } from "../../../models/modules"

interface Props extends TabsModule {}

const defaultProps = {}

const Tabs: React.FC<Props> = props => {
  console.log("Tabs: ", props)

  const screenWidth = useCurrentWidth()

  // state
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (screenWidth > 640) setIsDesktop(true)
    else setIsDesktop(false)
  }, [screenWidth])

  if (isDesktop) return <TabPanels {...props} cssClass="show-for-large" />

  return <TabAccordion {...props} cssClass="hide-for-large" />
}

Tabs.defaultProps = defaultProps

export default Tabs
