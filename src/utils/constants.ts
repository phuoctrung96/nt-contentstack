/****************************************************

	Constants

****************************************************/

/****************************************************
	Flickity Banners
****************************************************/
export const FLICKITY_ARROW =
  "M58.2 64c-5.8-4.1-10.5-9.9-10.7-14.2 0-4.9 4.3-9.9 9.7-15.2 4.7-4.5 10.5-8.9 14.4-14.4 2.8-3.9 4.5-10.9 1.9-15.4C71.3 1 66.6 0 62.9 0c-9.2 0-18.4 9.1-25.1 15.4-7.9 7.4-15.2 15-20.2 25.1-2.1 4.5-5.6 10.1-3.2 15.2 1.9 4.5 6.7 7.6 10.1 10.9 6.7 6.6 12.9 13.8 20.2 19.6 6.9 5.6 16.7 15.2 25.9 13.6 9-1.4 12.4-12.6 7.3-20-4.7-6.7-12.8-11.1-19.7-15.8z"

export const flickityBannerOptions = {
  wrapAround: true,
  dragThreshold: 40,
  cellSelector: ".slide",
  setGallerySize: true,
  adaptiveHeight: true, // this gives us responsive heights
  autoPlay: 7000,
  pauseAutoPlayOnHover: false,
  lazyLoad: true,
  arrowShape:
    "M58.2 64c-5.8-4.1-10.5-9.9-10.7-14.2 0-4.9 4.3-9.9 9.7-15.2 4.7-4.5 10.5-8.9 14.4-14.4 2.8-3.9 4.5-10.9 1.9-15.4C71.3 1 66.6 0 62.9 0c-9.2 0-18.4 9.1-25.1 15.4-7.9 7.4-15.2 15-20.2 25.1-2.1 4.5-5.6 10.1-3.2 15.2 1.9 4.5 6.7 7.6 10.1 10.9 6.7 6.6 12.9 13.8 20.2 19.6 6.9 5.6 16.7 15.2 25.9 13.6 9-1.4 12.4-12.6 7.3-20-4.7-6.7-12.8-11.1-19.7-15.8z",
}

export const flickityGalleryOptions = {
  wrapAround: true,
  dragThreshold: 40,
  cellSelector: ".slide",
  setGallerySize: true,
  adaptiveHeight: true, // this gives us responsive heights
  lazyLoad: true,
  arrowShape:
    "M58.2 64c-5.8-4.1-10.5-9.9-10.7-14.2 0-4.9 4.3-9.9 9.7-15.2 4.7-4.5 10.5-8.9 14.4-14.4 2.8-3.9 4.5-10.9 1.9-15.4C71.3 1 66.6 0 62.9 0c-9.2 0-18.4 9.1-25.1 15.4-7.9 7.4-15.2 15-20.2 25.1-2.1 4.5-5.6 10.1-3.2 15.2 1.9 4.5 6.7 7.6 10.1 10.9 6.7 6.6 12.9 13.8 20.2 19.6 6.9 5.6 16.7 15.2 25.9 13.6 9-1.4 12.4-12.6 7.3-20-4.7-6.7-12.8-11.1-19.7-15.8z",
}

/****************************************************
	Site languages
****************************************************/
export const SITE_LANG = [
  {
    href: "en",
    url: "",
  },
  {
    href: "en-us",
    url: "/us/en/",
  },
  {
    href: "en-gb",
    url: "/gb/en/",
  },
  {
    href: "en-sg",
    url: "/sg/en/",
  },
  {
    href: "fr",
    url: "/fr/fr/",
  },
  {
    href: "it",
    url: "/it/it/",
  },
  {
    href: "de",
    url: "/de/de/",
  },
  {
    href: "ja",
    url: "/jp/ja/",
  },
  {
    href: "zh-Hans",
    url: "/cn/zh/",
  },
  {
    href: "zh-Hant",
    url: "/tw/zh/",
  },
]
