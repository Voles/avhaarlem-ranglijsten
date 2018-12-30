import {
  DUIZEND_METER,
  HOOGSPRINGEN, KOGELSTOTEN,
  POLSSTOKHOOGSPRINGEN, VERSPRINGEN,
  VIJFTIG_METER, VIJFTIG_METER_HORDEN,
  ZESHONDERD_METER,
  ZESTIG_METER, ZESTIG_METER_HORDEN
} from '../../constants/onderdelen';

export default [
  {
    "onderdeel": VIJFTIG_METER,
    "naam": "Marjanne van Sambeek",
    "prestatie": "7,24 (7,0)",
    "plaats": "Utrecht",
    "datum": "29-02-1992"
  },
  {
    "onderdeel": VIJFTIG_METER,
    "naam": "Marjanne van Sambeek",
    "prestatie": "7,24 (7,0)",
    "plaats": "Utrecht",
    "datum": "07-11-1992"
  },
  {
    "onderdeel": ZESTIG_METER,
    "naam": "Marjanne van Sambeek",
    "prestatie": "8,34 (8,1)",
    "plaats": "Den Haag",
    "datum": "29-11-1992"
  },
  {
    "onderdeel": ZESHONDERD_METER,
    "naam": "Marjan Witteman",
    "prestatie": "1.50,1",
    "plaats": "Den Haag",
    "datum": "21-01-1990"
  },
  {
    "onderdeel": DUIZEND_METER,
    "naam": "Joanna Andrews",
    "prestatie": "3.34,3",
    "plaats": "Den Haag",
    "datum": "18-03-1990"
  },
  {
    "onderdeel": VIJFTIG_METER_HORDEN,
    "naam": "Jessica Ramakers",
    "prestatie": "9,44 (9,2)",
    "plaats": "Utrecht",
    "datum": "02-01-1993"
  },
  {
    "onderdeel": ZESTIG_METER_HORDEN,
    "naam": "Babs Koeman",
    "prestatie": "9,83",
    "plaats": "Utrecht",
    "datum": "03-02-2018"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": [
      "Joanna Andrews",
      "Jessica Ramakers"
    ],
    "prestatie": "1,50",
    "plaats": "Den Haag",
    "datum": "17-01-1993"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Babs Koeman",
    "prestatie": "1,50",
    "plaats": "Apeldoorn",
    "datum": "21-01-2018"
  },
  {
    "onderdeel": POLSSTOKHOOGSPRINGEN,
    "naam": "Mette Elgersma",
    "prestatie": "2,30",
    "plaats": "Apeldoorn",
    "datum": "22-01-2017"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Tara van Schie",
    "prestatie": "5,08",
    "plaats": "Groningen",
    "datum": "06-02-2005"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Sanna Piscaer",
    "prestatie": "10,45",
    "plaats": "Den Haag",
    "datum": "03-03-1996"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren C';
  return resultaat;
})
