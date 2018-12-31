import {
  ACHTHONDERD_METER,
  DUIZENDVIJFHONDERD_METER, HOOGSPRINGEN, KOGELSTOTEN, VERSPRINGEN,
  VIERHONDERD_METER, VIJFKAMP, VIJFTIG_METER_HORDEN, VIJFTIG_METER,
  ZESTIG_METER, ZESTIG_METER_HORDEN
} from "../../constants/onderdelen";

export default [
  {
    "onderdeel": VIJFTIG_METER,
    "naam": "Marjanne van Sambeek (B)",
    "prestatie": "7,04",
    "plaats": "Amsterdam",
    "datum": "05-02-1995"
  },
  {
    "onderdeel": ZESTIG_METER,
    "naam": "Anja Smits",
    "prestatie": "8,24",
    "plaats": "Leiden",
    "datum": "24-02-1973"
  },
  {
    "onderdeel": VIERHONDERD_METER,
    "naam": "Chantal Bruijn",
    "prestatie": "62,75",
    "plaats": "Den Haag",
    "datum": "16-02-1991"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Jirina van Kesteren",
    "prestatie": "2.32,41",
    "plaats": "Zuidbroek",
    "datum": "25-01-2004"
  },
  {
    "onderdeel": DUIZENDVIJFHONDERD_METER,
    "naam": "Larissa Scholten",
    "prestatie": "5.16,60",
    "plaats": "Groningen",
    "datum": "28-01-2007"
  },
  {
    "onderdeel": VIJFTIG_METER_HORDEN,
    "naam": "Jirina van Kesteren",
    "prestatie": "9,07",
    "plaats": "Alkmaar",
    "datum": "11-12-2004"
  },
  {
    "onderdeel": ZESTIG_METER_HORDEN,
    "naam": "Anja Smits",
    "prestatie": "9,34",
    "plaats": "Leiden",
    "datum": "24-02-1973"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Tara van Schie",
    "prestatie": "1.56",
    "plaats": "Gent (B)",
    "datum": "03-02-2008"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Anja Smits",
    "prestatie": "5.56",
    "plaats": "Leiden",
    "datum": "10-02-1973"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Wendy IJzerman",
    "prestatie": "11.20",
    "plaats": "Den Haag",
    "datum": "26-01-1997"
  },
  {
    "onderdeel": VIJFKAMP,
    "naam": "Tara van Schie",
    "plaats": "Gent (B)",
    "datum": "03-02-2008",
    "prestatie": [
      {
        "onderdeel": ZESTIG_METER_HORDEN,
        "prestatie": "9,72",
        "punten": "(756)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1.56",
        "punten": "(689)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "9.72",
        "punten": "(511)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "5.38",
        "punten": "(665)"
      },
      {
        "onderdeel": ACHTHONDERD_METER,
        "prestatie": "3.07,09",
        "punten": "(302)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "2932"
      }
    ]
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren A';
  return resultaat;
})
