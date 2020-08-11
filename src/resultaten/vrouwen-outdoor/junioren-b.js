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
    "prestatie": "12,74",
    "plaats": "Krommenie",
    "datum": "24-07-1988"
  },
  {
    "onderdeel": TWEEHONDERD_METER,
    "naam": "Tara van Schie",
    "prestatie": "26,17",
    "plaats": "Best",
    "datum": "30-06-2007"
  },
  {
    "naam": "Vera Hylkema",
    "prestatie": "61,10",
    "plaats": "Haarlem",
    "datum": "09-08-2020",
    "link": "https://www.atletiek.nu/wedstrijd/uitslagenonderdeel/33857/400m/#207607_"
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
    "naam": "Babs Koeman",
    "prestatie": "15,18",
    "plaats": "Heerenveen",
    "datum": "25-07-2020",
    "link": "https://www.atletiek.nu/wedstrijd/uitslagen/33786/202306/#losonderdeel_50_"
  },
  {
    "onderdeel": VIERHONDERD_METER_HORDEN,
    "naam": "Babs Koeman",
    "prestatie": "67,22",
    "plaats": "Den Haag",
    "datum": "29-07-2020",
    "link": "https://www.atletiek.nu/wedstrijd/uitslagenonderdeel/33864/400mH/#207899_"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Sanne Immer (C)",
    "prestatie": "1.60",
    "plaats": "Krommenie",
    "datum": "19-08-2000"
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
    "naam": "Babs Koeman (C)",
    "prestatie": "36.39",
    "plaats": "Zaandam",
    "datum": "12-05-2019"
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
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "4388 pnt"
      }
    ],
    "plaats": "Best",
    "datum": "11/12-05-2008"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren B';
  return resultaat;
})
