import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import resultaten from '../resultaten'
import Chart from "../components/Chart/Chart";

const dateStringToObject = (input) => {
  const parts = input.split('-')
  return Date.parse(`${parts[2]}-${parts[1]}-${parts[0]}`)
}

export const sorteerOpDatumEnPrestatie = (input) => {
  const result = [...input]

  result.sort((a, b) => {
    return dateStringToObject(b.datum) - dateStringToObject(a.datum) || a.parsedPrestatie.value - b.parsedPrestatie.value
  })

  result.reverse()

  return result
}

const Historie = ({location}) => {
  const history = useHistory()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const params = new URLSearchParams(location.search);
  const geslacht = params.get('geslacht')
  const locatie = params.get('locatie')
  const categorie = params.get('categorie')
  const onderdeel = params.get('onderdeel')

  const records = resultaten
  const filteredRecords = filterResultaten(records, geslacht, locatie, categorie, onderdeel)

  const firstRecord = filteredRecords[0]
  const titelPrefix = `${firstRecord.geslacht} ${firstRecord.categorie} ${firstRecord.locatie}`

  const grafiek = {
    records: sorteerOpDatumEnPrestatie(filteredRecords),
  }

  const handleClick = (event) => {
    event.preventDefault()
    history.go(-1)
  }

  const renderDatum = datum =>
    typeof datum === 'object' ?
      datum.toLocaleDateString() : datum;

  return (
    <div className="Historie">
      <div className="container d-print-none">
        <div className="row">
          <div className="col">
            <h1>{firstRecord.onderdeel}</h1>
            <p className="lead">
              Historie {titelPrefix}
            </p>
            <p>
              <a href="/" onClick={handleClick}>← Terug naar overzicht</a>
            </p>
            <br/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            {
              <Chart records={grafiek.records} />
            }
          </div>
        </div>

        <div className="row">
          <br/>
          <br/>

          <table className="table">
            <thead className="table">
            <tr>
              <th>Datum</th>
              <th>Plaats</th>
              <th>Atleet</th>
              <th className="text-end">Prestatie</th>
            </tr>
            </thead>
            <tbody className="table">
            {
              grafiek.records.map((record, i) => {
                return (
                  <tr key={i}>
                    <td>{renderDatum(record.datum)}</td>
                    <td>{record.plaats}</td>
                    <td>{record.naam}</td>
                    <td className="text-nowrap text-end">
                      {record.handtijd ?
                        `${record.prestatie} (${record.handtijd})` :
                        record.prestatie}
                    </td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const filterResultaten = (records, geslacht, locatie, categorie, onderdeel) => {
  return records.filter(record => {
    return record.geslacht.toLowerCase() === geslacht &&
      record.locatie.toLowerCase() === locatie &&
      record.categorie.toLowerCase().replace(' ', '-') === categorie &&
      record.onderdeel.toLowerCase().replace(' ', '-') === onderdeel
  })
}

export default Historie
