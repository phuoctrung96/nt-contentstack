/****************************************************

	Hook - Page Width

****************************************************/
import { useState, useEffect } from "react"

const isClient = typeof window === "object"
const getWidth = () =>
  isClient
    ? window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    : null

export const useCurrentWidth = (): number => {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth() || 0)

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId: NodeJS.Timeout
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId)
      // change width from the state object after 150 milliseconds
      timeoutId = setTimeout(() => setWidth(getWidth() || 0), 150)
    }
    // set resize listener
    window.addEventListener("resize", resizeListener)

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener)
    }
  }, [])

  return width
}

export default useCurrentWidth
