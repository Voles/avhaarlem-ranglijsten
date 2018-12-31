import {
  ACHTHONDERD_METER, DRIEDUIZEND_METER, HINKSTAPSPRINGEN, HOOGSPRINGEN,
  KOGELSTOTEN,
  TWEEHONDERD_METER, VERSPRINGEN,
  VIERHONDERD_METER, VIJFKAMP, VIJFTIG_METER,
  ZESTIG_METER, ZESTIG_METER_HORDEN
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
    "naam": "Brenda Stoete",
    "prestatie": "7,99",
    "plaats": "Den Haag",
    "datum": "26-01-1992"
  },
  {
    "onderdeel": TWEEHONDERD_METER,
    "naam": "Brenda Stoete",
    "prestatie": "26,61",
    "plaats": "Den Haag",
    "datum": "13-01-1991"
  },
  {
    "onderdeel": VIERHONDERD_METER,
    "naam": "Kristel van Es",
    "prestatie": "61,66",
    "plaats": "Apeldoorn",
    "datum": "13-02-2010"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Jirina van Kesteren",
    "prestatie": "2.32,41",
    "plaats": "Zuidbroek",
    "datum": "25-01-2004"
  },
  {
    "onderdeel": DRIEDUIZEND_METER,
    "naam": "Marianne van de Linde",
    "prestatie": "9.32,21",
    "plaats": "Den Haag",
    "datum": "16-02-1992"
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
    "naam": "Mieke van der Kolk",
    "prestatie": "6.16",
    "plaats": "Zwolle",
    "datum": "22-01-1994"
  },
  {
    "onderdeel": HINKSTAPSPRINGEN,
    "naam": "Mieke van der Kolk",
    "prestatie": "12.10",
    "plaats": "Den Haag",
    "datum": "20-02-1994"
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
  resultaat.categorie = 'Senioren';
  return resultaat;
})
