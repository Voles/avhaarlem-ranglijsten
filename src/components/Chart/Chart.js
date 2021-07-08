import React from "react";
import {Line} from "react-chartjs-2";
import {isoToSeconds, secondsToIso} from "../../tijdsnotatie";
import {GROOTHEID_AFSTAND, GROOTHEID_TIJD, onderdeelToGrootheid} from "../../resultaten/resultaten-naar-tabellen";
import {centimeterToNotatie, notatieToCentimeter} from "../../afstandsnotatie";

const prestatieToValue = (resultaat) => {
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

const onderdeelToEenheid = (onderdeel) => {
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

const valueToPrestatie = (onderdeel, value) => {
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

const Chart = ({ title, records }) => {
  const options = {
    parsing: {
      xAxisKey: 'datum',
      yAxisKey: 'value'
    },
    scales: {
      x: {
        offset: true,
        title: {
          display: true,
          text: 'Datum'
        }
      },
      y: {
        min: 0,
        ticks: {
          callback: function (value) {
            return valueToPrestatie(records[0].onderdeel, value)
          }
        },
        title: {
          display: true,
          text: `Prestatie (${onderdeelToEenheid(records[0].onderdeel)})`
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems) {
            return valueToPrestatie(tooltipItems[0].raw.onderdeel, tooltipItems[0].raw.value)
          },
          label: function (context) {
            return `${context.raw.naam} te ${context.raw.plaats}`;
          }
        }
      }
    }
  }

  const data = {
    labels: records.map(r => r.datum),
    datasets: [
      {
        label: 'Clubrecord',
        data: records.map(r => ({
          plaats: r.plaats,
          value: prestatieToValue(r),
          prestatie: r.prestatie,
          naam: r.naam,
          datum: r.datum,
          onderdeel: r.onderdeel,
        })),
      }
    ]
  };

  return (
    <>
      <h2>{title}</h2>
      <Line data={data} options={options}/>
    </>
  )
}

export default Chart
