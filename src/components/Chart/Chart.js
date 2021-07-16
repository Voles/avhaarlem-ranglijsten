import React from "react";
import {Line} from "react-chartjs-2";
import {valueToPrestatie} from "../../resultaten";

const Chart = ({records}) => {
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
          text: `Prestatie (${records[0].parsedPrestatie.eenheid})`
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
            return tooltipItems[0].raw.parsedPrestatie.officieleNotatie
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
          ...r,
          value: r.parsedPrestatie.value,
        })),
      }
    ]
  };

  return (
    <Line data={data} options={options}/>
  )
}

export default Chart
