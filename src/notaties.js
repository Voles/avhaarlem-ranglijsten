export const tijdsnotatieNaarSeconden = (tijdsnotatie) => {
  let result = 0

  const voorEnNaKomma = tijdsnotatie.split(',')
  const voorDeKomma = voorEnNaKomma[0]
  const naDeKomma = voorEnNaKomma[1]

  if (naDeKomma) {
    result += (parseFloat(naDeKomma) / 100)
  }

  if (voorDeKomma) {
    const tijden = voorDeKomma.split('.').reverse()

    const seconden = tijden.length >= 1 ? parseInt(tijden[0], 10) : 0
    const minuten = tijden.length >= 2 ? parseInt(tijden[1], 10) : 0
    const uren = tijden.length >= 3 ? parseInt(tijden[2], 10) : 0

    result += (seconden) + (minuten * 60) + (uren * 60 * 60)
  }

  return result
}

// via https://electrictoolbox.com/pad-number-zeroes-javascript/
function pad(number, length) {
  var str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }

  return str;
}

export const secondenNaarTijdsnotatie = (seconden) => {
  if (seconden < 1) {
    return `0,${pad(seconden, 2)}`
  }

  if (seconden < 60) {
    return `${pad(seconden, 2)},00`
  }

  if (seconden < 3600) {
    const minuten = Math.floor(seconden / 60)
    return `${pad(minuten, 2)}.${pad(seconden - (minuten*60), 2)},00`
  }

  const uren = Math.floor(seconden / 3600)
  const minuten = Math.floor((seconden - (uren*3600)) / 60)
  const overgeblevenSeconden = seconden - (uren * 3600) - (minuten * 60)
  return `${pad(uren, 2)}.${pad(minuten, 2)}.${pad(overgeblevenSeconden, 2)},00`
}
