import { VIERHONDERD_METER } from "../../constants/onderdelen";

export default [
  {
    "onderdeel": "50 meter",
    "naam": "Marjanne van Sambeek",
    "prestatie": "7,04 (6,8)",
    "plaats": "Amsterdam",
    "datum": "05-02-1995"
  },
  {
    "onderdeel": "60 meter",
    "naam": "Marjanne van Sambeek (C)",
    "prestatie": "8,34 (8,1)",
    "plaats": "Den Haag",
    "datum": "29-11-1992"
  },
  {
    "onderdeel": VIERHONDERD_METER,
    "naam": "Jirina van Kesteren",
    "prestatie": "63,45",
    "plaats": "Zuidbroek",
    "datum": "25-01-2004"
  },
  {
    "onderdeel": "800 meter",
    "naam": "Jirina van Kesteren",
    "prestatie": "2.32,41",
    "plaats": "Zuidbroek",
    "datum": "25-01-2004"
  },
  {
    "onderdeel": "60 meter horden",
    "naam": "Tara van Schie",
    "prestatie": "9,90",
    "plaats": "Gent (B)",
    "datum": "11-02-2007"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": "Joanna Andrews (C)",
    "prestatie": "1,50",
    "plaats": "Den Haag",
    "datum": "17-01-1993"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": "Jessica Ramakers (C)",
    "prestatie": "1,50",
    "plaats": "Den Haag",
    "datum": "17-01-1993"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Tara van Schie",
    "prestatie": "5,12",
    "plaats": "Groningen",
    "datum": "29-01-2006"
  },
  {
    "onderdeel": "kogelstoten",
    "naam": "Wendy IJzerman",
    "prestatie": "12,37",
    "plaats": "Den Haag",
    "datum": "26-02-1995"
  },
  {
    "onderdeel": "vijfkamp",
    "naam": "Tara van Schie",
    "plaats": "Gent (B)",
    "datum": "11-02-2007",
    "prestatie": [
      {
        "onderdeel": "60 meter horden",
        "prestatie": "9,90",
        "punten": "(731)"
      },
      {
        "onderdeel": "hoogspringen",
        "prestatie": "1,39",
        "punten": "(502)"
      },
      {
        "onderdeel": "kogelstoten",
        "prestatie": "10,94",
        "punten": "(591)"
      },
      {
        "onderdeel": "verspringen",
        "prestatie": "4,86",
        "punten": "(522)"
      },
      {
        "onderdeel": "800 meter",
        "prestatie": "3.00,98",
        "punten": "(356)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "2702"
      }
    ]
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren B';
  return resultaat;
})
