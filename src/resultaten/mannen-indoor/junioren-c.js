import {
  ACHTHONDERD_METER,
  DERTIG_METER, DUIZEND_METER, HOOGSPRINGEN, KOGELSTOTEN,
  VEERTIG_METER, VERSPRINGEN,
  VIJFENDERTIG_METER, VIJFTIG_METER_HORDEN, ZESHONDERD_METER,
  ZESTIG_METER, ZESTIG_METER_HORDEN
} from '../../constants/onderdelen';

export default [
  {
    "onderdeel": DERTIG_METER,
    "naam": "Finn Damhoff",
    "prestatie": "5,03",
    "plaats": "Heerde",
    "datum": "24-11-2018"
  },
  {
    "onderdeel": VIJFENDERTIG_METER,
    "naam": "Erick Könst",
    "prestatie": "5,4",
    "plaats": "Den Bosch",
    "datum": "28-01-2018"
  },
  {
    "onderdeel": VEERTIG_METER,
    "naam": "Erick Könst",
    "prestatie": "6,26",
    "plaats": "Waalwijk",
    "datum": "25-02-2018"
  },
  {
    "onderdeel": "50 meter h.t.",
    "naam": "Richard Kruithof",
    "prestatie": "6,84 (6,6)",
    "plaats": "Amsterdam",
    "datum": "05-03-1977"
  },
  {
    "onderdeel": "50 meter h.t.",
    "naam": "Jason Mensingh",
    "prestatie": "6,84 (6,6)",
    "plaats": "Amsterdam",
    "datum": "13-11-1993"
  },
  {
    "onderdeel": ZESTIG_METER,
    "naam": "Kan Dinkla",
    "prestatie": "7,66",
    "plaats": "Zuidbroek",
    "datum": "25-01-2004"
  },
  {
    "onderdeel": ZESHONDERD_METER,
    "naam": "Vincent van der Lans",
    "prestatie": "1.49,0",
    "plaats": "Den Haag",
    "datum": "29-11-1992"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Roberto Slierings",
    "prestatie": "2.12,06",
    "plaats": "Den Haag",
    "datum": "18-02-1995"
  },
  {
    "onderdeel": DUIZEND_METER,
    "naam": "Peter Markwat",
    "prestatie": "3.22,4",
    "plaats": "Den Haag",
    "datum": "25-11-1990"
  },
  {
    "onderdeel": VIJFTIG_METER_HORDEN,
    "naam": "Barry Doodeman",
    "prestatie": "9,14 (8,9)",
    "plaats": "Utrecht",
    "datum": "06-02-1988"
  },
  {
    "onderdeel": ZESTIG_METER_HORDEN,
    "naam": "Jason Mensingh",
    "prestatie": "9,37",
    "plaats": "Den Haag",
    "datum": "13-03-1994"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Erick Könst",
    "prestatie": "1,73",
    "plaats": "Dordrecht",
    "datum": "27-10-2018"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Pim Pauel",
    "prestatie": "5,29",
    "plaats": "Zoetermeer",
    "datum": "02-03-2013"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Dennis Kruithof",
    "prestatie": "13,33",
    "plaats": "Amsterdam",
    "datum": "??-02-1980"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren C';
  return resultaat;
});
