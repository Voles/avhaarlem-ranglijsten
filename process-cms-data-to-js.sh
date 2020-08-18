#!/usr/bin/env bash

set -e # exit on errors
set -u # fail on unknown variables

FILES_TO_READ='./_data/clubrecords/*'
DESTINATION='./src/resultaten/index.js'

ls -d $FILES_TO_READ

echo "const resultaten = " > $DESTINATION
ls -d $FILES_TO_READ | xargs cat | jq -s . >> $DESTINATION
echo "
export default resultaten.map(resultaat => {
  resultaat.prestatie = JSON.parse(resultaat.prestatie.code)

  if (resultaat.naam.indexOf(',') !== -1) {
    resultaat.naam = resultaat.naam.split(', ')
  }

  return resultaat
})" >> $DESTINATION
