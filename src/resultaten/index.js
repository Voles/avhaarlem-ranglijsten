import resultaten from './raw'
import {GROOTHEID_AFSTAND, GROOTHEID_TIJD, onderdeelToGrootheid} from "./resultaten-naar-tabellen";
import {isoToSeconds, secondsToIso} from "../tijdsnotatie";
import {centimeterToNotatie, notatieToCentimeter} from "../afstandsnotatie";

export const ONDERDELEN_ZONDER_ONDERSTEUNING_VOOR_HISTORIE = ["Vijfkamp", "Zeskamp", "Zevenkamp", "Achtkamp", "Negenkamp", "Tienkamp"]

export default resultaten
  .map(resultaat => enhanceRawResultaat(resultaat))
  .filter(resultaat => resultaat !== null)

function enhanceRawResultaat(resultaat) {
  try {
    if (resultaat.naam.indexOf(',') !== -1) {
      resultaat.naam = resultaat.naam.split(', ')
    }

    resultaat.prestatie = JSON.parse(resultaat.prestatie.code)

    if (ONDERDELEN_ZONDER_ONDERSTEUNING_VOOR_HISTORIE.includes(resultaat.onderdeel)) {
      return resultaat
    }

    const value = prestatieToValueForResultaat(resultaat)
    resultaat.parsedPrestatie = {
      value: value,
      grootheid: onderdeelToGrootheid(resultaat.onderdeel),
      eenheid: onderdeelToEenheid(resultaat.onderdeel),
      officieleNotatie: valueToPrestatie(resultaat.onderdeel, value)
    }

    return resultaat
  } catch (error) {
    console.debug(`failed to parse resultaat: ${JSON.stringify(resultaat)} error: ${error}`)
    return null
  }
}

function onderdeelToEenheid(onderdeel) {
  switch (onderdeelToGrootheid(onderdeel)) {
    case GROOTHEID_TIJD:
      return 'tijd'

    case GROOTHEID_AFSTAND:
      return 'meter'

    default:
      console.warn(`unable to determine eenheid for onderdeel: ${onderdeel}`)
      return '?'
  }
}

function prestatieToValueForResultaat(resultaat) {
  switch (onderdeelToGrootheid(resultaat.onderdeel)) {
    case GROOTHEID_TIJD:
      return isoToSeconds(resultaat.prestatie)

    case GROOTHEID_AFSTAND:
      return notatieToCentimeter(resultaat.prestatie)

    default:
      console.warn(`unable to convert prestatie to value: ${JSON.stringify(resultaat)}`)
      return 0
  }
}

export function valueToPrestatie(onderdeel, value) {
  switch (onderdeelToGrootheid(onderdeel)) {
    case GROOTHEID_TIJD:
      return secondsToIso(value)

    case GROOTHEID_AFSTAND:
      return `${centimeterToNotatie(value)} m`

    default:
      console.warn(`unable to convert value to prestatie: ${onderdeel}, ${value}`)
      return '?'
  }
}
