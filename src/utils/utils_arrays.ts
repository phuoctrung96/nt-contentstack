/****************************************************

	Utilities - Arrays

****************************************************/

/******************************************************
	Shuffle and array
******************************************************/
export const shuffleArray = (array: any[]) => {
  var currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

/******************************************************
	Intersection of 2 arrays
******************************************************/
export const intersectArrays = (arrA: any[], arrB: any[]) => {
  return arrA.filter(x => arrB.includes(x))
}

/******************************************************
	Difference of 2 arrays
******************************************************/
export const diffArrays = (arrA: any[], arrB: any[]) => {
  return arrA.filter(x => !arrB.includes(x))
}

/******************************************************
	Symmetrical Difference of 2 arrays
******************************************************/
export const symDiffArrays = (arrA: any[], arrB: any[]) => {
  return arrA
    .filter(x => !arrB.includes(x))
    .concat(arrB.filter(x => !arrA.includes(x)))
}

/******************************************************
	Union of 2 arrays - no duplicates
******************************************************/
export const unionArrays = (arrA: any[], arrB: any[]) => {
  return [...new Set([...arrA, ...arrB])]
}

/******************************************************
	Remove duplicates from array of strings
******************************************************/
export const removeDuplicates = (arr: string[]) => {
  return [...new Set(arr)]
}

/******************************************************
	Check for an empty array
******************************************************/
export const isEmptyArray = (arr: any) => {
  if (Array.isArray(arr)) {
    return arr.length === 0
  }
  return true
}

/******************************************************
	Get the first item of an array
******************************************************/
export const getFirstArrayItem = (item: any, empty: any = undefined) => {
  if (Array.isArray(item)) {
    if (item.length) return item[0]
    else return empty
  }
  return item
}
