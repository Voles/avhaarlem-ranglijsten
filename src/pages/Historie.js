import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import resultaten from '../resultaten'
import {ACHTKAMP, TIENKAMP, VIJFKAMP, ZESKAMP, ZEVENKAMP} from "../constants/onderdelen";
import Chart from "../components/Chart/Chart";

const Historie = ({location}) => {
  const history = useHistory()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const params = new URLSearchParams(location.search);
  const geslacht = params.get('geslacht')
  const locatie = params.get('locatie')
  const categorie = params.get('categorie')

  const records = resultaten
  const filteredRecords = filterResultaten(records, geslacht, locatie, categorie)
  const alleOnderdelenBehalveMeerkampen = [...new Set(filteredRecords.map(r => r.onderdeel).filter(onderdeel => ![VIJFKAMP, ZESKAMP, ZEVENKAMP, ACHTKAMP, TIENKAMP].includes(onderdeel)))]

  const firstRecord = filteredRecords[0]
  const titelPrefix = `${firstRecord.geslacht} ${firstRecord.categorie} ${firstRecord.locatie}`

  const grafieken = alleOnderdelenBehalveMeerkampen
    .map(onderdeel => ({
      titel: `${onderdeel}`,
      records: filteredRecords.filter(r => r.onderdeel === onderdeel),
    }))

  const handleClick = (event) => {
    event.preventDefault()
    history.go(-1)
  }

  return (
    <div className="Historie">
      <div className="container d-print-none">
        <h1>Historie {titelPrefix}</h1>
        <p>
          <a href="/" onClick={handleClick}>← Terug naar overzicht</a>
        </p>
        {
          grafieken.map((grafiek, i) =>
            <Chart title={grafiek.titel} records={grafiek.records} key={i}/>
          )
        }
      </div>
    </div>
  )
}

const filterResultaten = (records, geslacht, locatie, categorie) => {
  return records.filter(record => {
    return record.geslacht.toLowerCase() === geslacht &&
      record.locatie.toLowerCase() === locatie &&
      record.categorie.toLowerCase().replace(' ', '-') === categorie
  })
}

export default Historie
