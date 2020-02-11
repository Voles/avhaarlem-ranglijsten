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
    "naam": "Babs Koeman",
    "prestatie": "9,37",
    "plaats": "Assendelft",
    "datum": "24-11-2019",
    "link": "https://www.atletiek.nu/wedstrijd/uitslagenonderdeel/32242/60mH_f/#171003_"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Babs Koeman",
    "prestatie": "1.51",
    "plaats": "Assendelft",
    "datum": "15-12-2019",
    "link": "https://www.atletiek.nu/wedstrijd/uitslagenonderdeel/32243/Hoog/#171013_"
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
        "prestatie": "9,59",
        "punten": "(791)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1.51",
        "punten": "(632)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "9.77",
        "punten": "(514)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "5.04",
        "punten": "(570)"
      },
      {
        "onderdeel": ACHTHONDERD_METER,
        "prestatie": "2.32,72",
        "punten": "(659)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "3166"
      }
    ],
    "link": "https://www.atletiek.nu/wedstrijd/vereniging/32514/48/"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren B';
  return resultaat;
})
