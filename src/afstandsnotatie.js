export const notatieToCentimeter = (notatie) => {
  return Math.floor(parseFloat(notatie.replace(',', '.')) * 100)
}

export const centimeterToNotatie = (centimeter) => {
  return `${centimeter/100}`.replace('.', ',')
}
