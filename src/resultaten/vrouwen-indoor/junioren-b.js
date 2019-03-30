import {
  ACHTHONDERD_METER, HOOGSPRINGEN, KOGELSTOTEN, VERSPRINGEN,
  VIERHONDERD_METER, VIJFKAMP,
  VIJFTIG_METER,
  ZESTIG_METER,
  ZESTIG_METER_HORDEN
} from "../../constants/onderdelen";

export default [
  {
    "onderdeel": VIJFTIG_METER,
    "naam": "Marjanne van Sambeek",
    "prestatie": "7,04",
    "plaats": "Amsterdam",
    "datum": "05-02-1995"
  },
  {
    "onderdeel": ZESTIG_METER,
    "naam": "Marjanne van Sambeek (C)",
    "prestatie": "8,34",
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
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Jirina van Kesteren",
    "prestatie": "2.32,41",
    "plaats": "Zuidbroek",
    "datum": "25-01-2004"
  },
  {
    "onderdeel": ZESTIG_METER_HORDEN,
    "naam": "Tara van Schie",
    "prestatie": "9,90",
    "plaats": "Gent (B)",
    "datum": "11-02-2007"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": [
      "Joanna Andrews (C)",
      "Jessica Ramakers (C)"
    ],
    "prestatie": "1.50",
    "plaats": "Den Haag",
    "datum": "17-01-1993"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Tara van Schie",
    "prestatie": "5.12",
    "plaats": "Groningen",
    "datum": "29-01-2006"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Wendy IJzerman",
    "prestatie": "12.37",
    "plaats": "Den Haag",
    "datum": "26-02-1995"
  },
  {
    "onderdeel": VIJFKAMP,
    "naam": "Tara van Schie",
    "plaats": "Gent (B)",
    "datum": "11-02-2007",
    "prestatie": [
      {
        "onderdeel": ZESTIG_METER_HORDEN,
        "prestatie": "9,90",
        "punten": "(731)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1.39",
        "punten": "(502)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "10.94",
        "punten": "(591)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "4.86",
        "punten": "(522)"
      },
      {
        "onderdeel": ACHTHONDERD_METER,
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
