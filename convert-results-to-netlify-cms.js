import results from './src/resultaten/index'
import fs from 'fs'
import path from 'path'

const destination = './_data/clubrecords/'

results.map(result => {
  try {
    result.naam = Array.isArray(result.naam) ? result.naam.join(', ') : result.naam
    const filename = `${convertToSlug(result.geslacht)}-${result.locatie}-${convertToSlug(result.categorie)}-${convertToSlug(result.onderdeel)}.json`

    result.prestatie = {
      "code": JSON.stringify(result.prestatie, null, 4)
    }

    const data = JSON.stringify(result, null, 4)
    fs.writeFileSync(path.join(destination, filename), data)
  } catch (error) {
    console.log('error: ', error)
  }
})

// via https://stackoverflow.com/a/1054862
function convertToSlug(Text)
{
  return Text
    .toLowerCase()
    .replace(/ /g,'-')
    .replace(/[^\w-]+/g,'')
    ;
}
