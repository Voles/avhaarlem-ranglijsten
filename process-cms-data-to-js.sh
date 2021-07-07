#!/usr/bin/env bash

set -e # exit on errors
set -u # fail on unknown variables

FILES_TO_READ='./_data/clubrecords/*'
DESTINATION='./src/resultaten/raw.js'

echo "const resultaten = " > $DESTINATION
ls -d $FILES_TO_READ | xargs cat | jq -s . >> $DESTINATION
echo "
export default resultaten
" >> $DESTINATION
