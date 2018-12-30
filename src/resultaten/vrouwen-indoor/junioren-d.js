import {
  DUIZEND_METER, HOOGSPRINGEN, KOGELSTOTEN, VERSPRINGEN,
  VIJFTIG_METER,
  VIJFTIG_METER_HORDEN,
  ZESHONDERD_METER,
  ZESTIG_METER, ZESTIG_METER_HORDEN
} from '../../constants/onderdelen';

export default [
  {
    "onderdeel": VIJFTIG_METER,
    "naam": "Marjanne van Sambeek",
    "prestatie": "7,24",
    "plaats": "Utrecht",
    "datum": "29-02-1992"
  },
  {
    "onderdeel": ZESTIG_METER,
    "naam": "Marjanne van Sambeek",
    "prestatie": "8,64",
    "plaats": "Den Haag",
    "datum": "10-03-1991"
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
    "naam": "Joanna Andrews",
    "prestatie": "8,84",
    "plaats": "Utrecht",
    "datum": "23-02-1992"
  },
  {
    "onderdeel": ZESTIG_METER_HORDEN,
    "naam": "Baltine de Wit",
    "prestatie": "9,60",
    "plaats": "Den Haag",
    "datum": "06-03-1994"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Joanna Andrews",
    "prestatie": "1.45",
    "plaats": "Zaandam",
    "datum": "15-02-1992"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Babs Koeman",
    "prestatie": "4.67",
    "plaats": "Zoetermeer",
    "datum": "17-12-2016"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Sanna Piscaer",
    "prestatie": "10.45",
    "plaats": "Den Haag",
    "datum": "06-03-1994"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren D';
  return resultaat;
})
