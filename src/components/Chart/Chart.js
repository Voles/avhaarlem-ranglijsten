import React from "react";
import {Line} from "react-chartjs-2";
import {isoToSeconds, secondsToIso} from "../../tijdsnotatie";

const dateStringToObject = (input) => {
  const parts = input.split('-')
  return Date.parse(`${parts[2]}-${parts[1]}-${parts[0]}`)
}

const sorteerOpDatum = (input) => {
  const result = [...input]

  result.sort((a, b) => {
    return dateStringToObject(b.datum) - dateStringToObject(a.datum)
  })

  result.reverse()

  return result
}

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
          return secondsToIso(value)
        }
      },
      title: {
        display: true,
        text: 'Prestatie (tijd)'
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
          return `${tooltipItems[0].raw.prestatie}`
        },
        label: function (context) {
          return `${context.raw.naam} te ${context.raw.plaats}`;
        }
      }
    }
  }
}

const Chart = ({ title, records }) => {
  const data = {
    labels: records.map(r => r.datum),
    datasets: [
      {
        label: 'Clubrecord',
        data: sorteerOpDatum(records.map(r => ({
          plaats: r.plaats,
          value: isoToSeconds(r.prestatie),
          prestatie: r.prestatie,
          naam: r.naam,
          datum: r.datum,
        }))),
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
