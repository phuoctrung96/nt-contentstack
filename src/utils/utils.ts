/****************************************************

	Utilities

****************************************************/
import { animateScroll as scroll } from "react-scroll"

/******************************************************
	Animate page scroll
******************************************************/
export const scrollToRef = (
  ref: React.RefObject<HTMLElement>,
  offset: number = 0,
  callback: () => void = () => {}
) => {
  if (ref?.current) {
    const top = ref.current.getBoundingClientRect().top - offset
    scroll.scrollMore(top, {
      duration: 0,
      smooth: "linear",
      delay: 0,
    })

    setTimeout(() => callback(), 300)
  }
}

/******************************************************
	Get the video ID
******************************************************/
export const getYouTubeId = (url: string) => {
  const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/)
  return undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0]
}
