import {
  ACHTHONDERD_METER, DISCUSWERPEN,
  DUIZEND_METER, DUIZENDVIJFHONDERD_METER, HINKSTAPSPRINGEN,
  HONDERD_METER, HONDERD_METER_HORDEN, HOOGSPRINGEN, KOGELSTOTEN, POLSSTOKHOOGSPRINGEN, SPEERWERPEN,
  TWEEHONDERD_METER, VERSPRINGEN, VIER_KEER_HONDERD_METER,
  VIERHONDERD_METER, VIERHONDERD_METER_HORDEN, ZEVENKAMP
} from "../../constants/onderdelen";

export default [
  {
    "onderdeel": HONDERD_METER,
    "naam": "Brenda Stoete",
    "prestatie": "12,74 (12,5)",
    "plaats": "Krommenie",
    "datum": "24-07-1988"
  },
  {
    "onderdeel": TWEEHONDERD_METER,
    "naam": "Tara van Schie",
    "prestatie": "26,17 (-0,2 m/s)",
    "plaats": "Best",
    "datum": "30-06-2007"
  },
  {
    "onderdeel": VIERHONDERD_METER,
    "naam": "Chantal Bruyn",
    "prestatie": "61,74 (61,6)",
    "plaats": "Haarlem",
    "datum": "16-09-1990"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Jirina van Kesteren",
    "prestatie": "2.26,18",
    "plaats": "Emmeloord",
    "datum": "26-09-2004"
  },
  {
    "onderdeel": DUIZEND_METER,
    "naam": "Larissa Scholten (C)",
    "prestatie": "3.10,64",
    "plaats": "Utrecht",
    "datum": "22-06-2002"
  },
  {
    "onderdeel": DUIZENDVIJFHONDERD_METER,
    "naam": "Jirina van Kesteren",
    "prestatie": "5.25,81",
    "plaats": "Haarlem",
    "datum": "13-08-2003"
  },
  {
    "onderdeel": HONDERD_METER_HORDEN,
    "naam": "Tara van Schie",
    "prestatie": "15,28 (+1,2 m/s)",
    "plaats": "Best",
    "datum": "30-06-2007"
  },
  {
    "onderdeel": VIERHONDERD_METER_HORDEN,
    "naam": "Jirina van Kesteren",
    "prestatie": "68,82",
    "plaats": "Sittard",
    "datum": "25-06-2004"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Sanne Immer (C)",
    "prestatie": "1.60",
    "plaats": "Krommenie",
    "datum": "19-08-2000"
  },
  {
    "onderdeel": "",
    "naam": "Sanne Immer (C)",
    "prestatie": "1.60",
    "plaats": "Amsterdam",
    "datum": "26-06-2000"
  },
  {
    "onderdeel": POLSSTOKHOOGSPRINGEN,
    "naam": "Mette Elgersma",
    "prestatie": "2.60",
    "plaats": "Alkmaar",
    "datum": "27-05-2018"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Tara van Schie",
    "prestatie": "5.42",
    "plaats": "Utrecht",
    "datum": "08-07-2007"
  },
  {
    "onderdeel": HINKSTAPSPRINGEN,
    "naam": "Tara van Schie",
    "prestatie": "10.63",
    "plaats": "Utrecht",
    "datum": "08-07-2007"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Tara van Schie",
    "prestatie": "12.14",
    "plaats": "Valkenswaard",
    "datum": "01-09-2007"
  },
  {
    "onderdeel": DISCUSWERPEN,
    "naam": "Baltine de Wit",
    "prestatie": "29.70",
    "plaats": "Haarlem",
    "datum": "18-04-1999"
  },
  {
    "onderdeel": SPEERWERPEN,
    "naam": "Ingeborg Zandbergen",
    "prestatie": "31.30",
    "plaats": "Alphen aan den Rijn",
    "datum": "12-06-1994"
  },
  {
    "onderdeel": VIER_KEER_HONDERD_METER,
    "naam": ["Babs Koeman", "Mette Elgersma", "Anna Hovinga", "Marjolein Groot"],
    "prestatie": "53,84",
    "plaats": "Heerhugowaard",
    "datum": "10-06-2018"
  },
  {
    "onderdeel": ZEVENKAMP,
    "naam": "Tara van Schie",
    "prestatie": [
      {
        "onderdeel": HONDERD_METER_HORDEN,
        "prestatie": "15,28",
        "punten": "(805)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1.51",
        "punten": "(632)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "11.41",
        "punten": "(622)"
      },
      {
        "onderdeel": TWEEHONDERD_METER,
        "prestatie": "26.17",
        "punten": "(782)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "5.31",
        "punten": "(645)"
      },
      {
        "onderdeel": SPEERWERPEN,
        "prestatie": "26.19",
        "punten": "(405)"
      },
      {
        "onderdeel": ACHTHONDERD_METER,
        "prestatie": "2.46,79",
        "punten": "(497)"
      }
    ],
    "plaats": "Best",
    "datum": "11/12-05-2008"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren B';
  return resultaat;
})
