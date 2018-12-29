import {
  DUIZEND_METER, HOOGSPRINGEN, KOGELSTOTEN,
  VEERTIG_METER, VEERTIG_METER_HORDEN, VERSPRINGEN,
  VIJFENDERTIG_METER,
  VIJFTIG_METER, VIJFTIG_METER_HORDEN,
  ZESHONDERD_METER,
  ZESTIG_METER, ZESTIG_METER_HORDEN
} from '../../constants/onderdelen';

export default [
  {
    "onderdeel": VIJFENDERTIG_METER,
    "naam": "Tymo Bouman",
    "prestatie": "5,5",
    "plaats": "Epe",
    "datum": "12-03-2017"
  },
  {
    "onderdeel": VEERTIG_METER,
    "naam": "Tymo Bouman",
    "prestatie": "6,2",
    "plaats": "Doetichem",
    "datum": "25-02-2018"
  },
  {
    "onderdeel": VIJFTIG_METER,
    "naam": "Tymo Bouman",
    "prestatie": "7,49",
    "plaats": "Heerenveen",
    "datum": "17-03-2018"
  },
  {
    "onderdeel": ZESTIG_METER,
    "naam": "Ivo van Kempen",
    "prestatie": "8,51",
    "plaats": "Den Haag",
    "datum": "05-03-1995"
  },
  {
    "onderdeel": ZESHONDERD_METER,
    "naam": "Vincent van der Lans",
    "prestatie": "1.49,0",
    "plaats": "Den Haag",
    "datum": "29-11-1992"
  },
  {
    "onderdeel": DUIZEND_METER,
    "naam": "Peter Markwat",
    "prestatie": "3.22,4",
    "plaats": "Den Haag",
    "datum": "25-11-1990"
  },
  {
    "onderdeel": VEERTIG_METER_HORDEN,
    "naam": "Tymo Bouman",
    "prestatie": "7,3",
    "plaats": "Doetichem",
    "datum": "25-02-2018"
  },
  {
    "onderdeel": VIJFTIG_METER_HORDEN,
    "naam": "Pim Pauel",
    "prestatie": "9,64 (9,4)",
    "plaats": "Amsterdam",
    "datum": "20-11-2010"
  },
  {
    "onderdeel": ZESTIG_METER_HORDEN,
    "naam": "Derk Hoefman",
    "prestatie": "10,30",
    "plaats": "Enschede",
    "datum": "28-10-2018"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": ["Erick Könst", "Tymo Bouman"],
    "prestatie": "1,40",
    "plaats": "Dongen / Uden",
    "datum": "17-01-2016 / 16-12-2017"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Pim Pauel",
    "prestatie": "4,52",
    "plaats": "Amsterdam",
    "datum": "20-11-2010"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Erick Konst",
    "prestatie": "10,50",
    "plaats": "Bergen op Zoom",
    "datum": "29-10-2016"
  }
]
  .map(resultaat => {
  resultaat.categorie = 'Junioren D';
  return resultaat;
});
