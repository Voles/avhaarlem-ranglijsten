#!/usr/bin/env bash

FILES_TO_READ='./_data/clubrecords/*'
DESTINATION='./src/resultaten/index.js'

echo "export default " > $DESTINATION
ls -d $FILES_TO_READ | xargs cat | jq -s >> $DESTINATION
