import {pad} from "./pad";

export const isoToSeconds = (tijdsnotatie) => {
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

export const secondsToIso = (seconden) => {
  const naDeKomma = ("" + seconden * 100).slice(-2)

  if (seconden < 1) {
    return `00,${naDeKomma}`
  }

  if (seconden < 60) {
    return `${pad(Math.floor(seconden), 2)},${naDeKomma}`
  }

  if (seconden < 3600) {
    const minuten = Math.floor(seconden / 60)
    return `${pad(minuten, 2)}.${pad(Math.floor(seconden - (minuten * 60)), 2)},${naDeKomma}`
  }

  const uren = Math.floor(seconden / 3600)
  const minuten = Math.floor((seconden - (uren * 3600)) / 60)
  const overgeblevenSeconden = Math.floor(seconden - (uren * 3600) - (minuten * 60))
  return `${pad(uren, 2)}.${pad(minuten, 2)}.${pad(overgeblevenSeconden, 2)},${naDeKomma}`
}

