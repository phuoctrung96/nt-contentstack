import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { AppDispatch } from "../../state/store"
import { ipAddressSelector, getIpAddress } from "../../state/ipAddress"

interface StateProps {}

const State: React.FC<StateProps> = () => {
  const dispatch: AppDispatch = useDispatch()

  // set the IP address in state
  const ipAddress = useSelector(ipAddressSelector)
  useEffect(() => {
    if (ipAddress.status === "idle") dispatch(getIpAddress())
  }, [ipAddress.status, dispatch])

  return null
}

export default State
