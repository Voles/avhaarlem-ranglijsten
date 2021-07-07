import resultaten from './raw'

export default resultaten.map(resultaat => {
  try {
    resultaat.prestatie = JSON.parse(resultaat.prestatie.code)

    if (resultaat.naam.indexOf(',') !== -1) {
      resultaat.naam = resultaat.naam.split(', ')
    }

    return resultaat
  } catch (error) {
    console.debug(`failed to parse resultaat: ${JSON.stringify(resultaat)} error: ${error}`)
    return null
  }
}).filter(resultaat => resultaat !== null)
