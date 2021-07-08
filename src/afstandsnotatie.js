export const notatieToCentimeter = (notatie) => {
  return Math.floor(parseFloat(notatie.replace(',', '.')) * 100)
}

export const centimeterToNotatie = (centimeter) => {
  return `${Math.floor(centimeter/100)},${('' + centimeter).slice(-2)}`
}
