import {
  ACHTHONDERD_METER,
  DISCUSWERPEN,
  DRIEHONDERD_METER,
  DRIEHONDERD_METER_HORDEN,
  DUIZEND_METER,
  DUIZENDVIJFHONDERD_METER,
  HONDERDVIJFTIG_METER,
  HOOGSPRINGEN,
  KOGELSTOTEN,
  POLSSTOKHOOGSPRINGEN,
  SPEERWERPEN, TACHTIG_METER, TACHTIG_METER_HORDEN,
  TWEEHONDERD_METER,
  VERSPRINGEN, VIER_KEER_TACHTIG_METER,
  VIERHONDERD_METER,
  ZESHONDERD_METER, ZEVENKAMP
} from "../../constants/onderdelen";

export default [
  {
    "onderdeel": TACHTIG_METER,
    "naam": "Aneska de Windt",
    "prestatie": "10,64",
    "plaats": "",
    "datum": "1988"
  },
  {
    "onderdeel": TACHTIG_METER,
    "naam": "Marjanne van Sambeek",
    "prestatie": "10,64",
    "plaats": "Amsterdam",
    "datum": "21-08-1993"
  },
  {
    "onderdeel": HONDERDVIJFTIG_METER,
    "naam": "Tara van Schie",
    "prestatie": "19,54",
    "plaats": "Beverwijk",
    "datum": "03-07-2004"
  },
  {
    "onderdeel": TWEEHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "28,46",
    "plaats": "Edam",
    "datum": "13-05-2018"
  },
  {
    "onderdeel": DRIEHONDERD_METER,
    "naam": "Vera Hijlkema",
    "prestatie": "43,60",
    "plaats": "Amsterdam",
    "datum": "26-08-2018"
  },
  {
    "onderdeel": VIERHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "1.03,43",
    "plaats": "Heerhugowaard",
    "datum": "10-06-2018"
  },
  {
    "onderdeel": ZESHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "1.40,23",
    "plaats": "Amstelveen",
    "datum": "9-06-2019"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "2.31,56",
    "plaats": "Haarlem",
    "datum": "08-06-2018"
  },
  {
    "onderdeel": DUIZEND_METER,
    "naam": "Larissa Scholten",
    "prestatie": "3.10,64",
    "plaats": "Utrecht",
    "datum": "22-06-2002"
  },
  {
    "onderdeel": DUIZENDVIJFHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "5.15,44",
    "plaats": "Assendelft",
    "datum": "25-05-2018"
  },
  {
    "onderdeel": TACHTIG_METER_HORDEN,
    "naam": "Babs Koeman",
    "prestatie": "12,38",
    "plaats": "Lisse",
    "datum": "15-06-2019"
  },
  {
    "onderdeel": DRIEHONDERD_METER_HORDEN,
    "naam": "Babs Koeman",
    "prestatie": "46,12",
    "plaats": "Amsterdam",
    "datum": "24-08-2019",
    "link": "https://www.atletiek.nu/wedstrijd/startlijst/226601/217/"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Sanne Immer",
    "prestatie": "1.60",
    "plaats": "Krommenie",
    "datum": "19-08-2000"
  },
  {
    "onderdeel": POLSSTOKHOOGSPRINGEN,
    "naam": "Mette Elgersma",
    "prestatie": "2.40",
    "plaats": "Heerhugowaard",
    "datum": "02-06-2017"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Marjanne van Sambeek",
    "prestatie": "5.31",
    "plaats": "Beverwijk",
    "datum": "05-06-1993"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Wendy IJzerman",
    "prestatie": "12.07",
    "plaats": "Amersfoort",
    "datum": "24-04-1993"
  },
  {
    "onderdeel": DISCUSWERPEN,
    "naam": "Wendy IJzerman",
    "prestatie": "24.92",
    "plaats": "Beverwijk",
    "datum": "05-06-1993"
  },
  {
    "onderdeel": SPEERWERPEN,
    "naam": "Babs Koeman",
    "prestatie": "36.39",
    "plaats": "Zaandam",
    "datum": "12-05-2019"
  },
  {
    "onderdeel": VIER_KEER_TACHTIG_METER,
    "naam": ["Sanna Piscaer", "Janna de Waard", "Marije Zandstra", "Baltine de Wit"],
    "prestatie": "41,94",
    "plaats": "Heerhugowaard",
    "datum": "17-06-1996"
  },
  {
    "onderdeel": ZEVENKAMP,
    "naam": "Babs Koeman",
    "prestatie": [
      {
        "onderdeel": TACHTIG_METER_HORDEN,
        "prestatie": "12,42",
        "punten": "(652)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1.49",
        "punten": "(615)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "9.30",
        "punten": "(488)"
      },
      {
        "onderdeel": HONDERDVIJFTIG_METER,
        "prestatie": "20.16",
        "punten": "(604)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "5.07",
        "punten": "(634)"
      },
      {
        "onderdeel": SPEERWERPEN,
        "prestatie": "34.74",
        "punten": "(566)"
      },
      {
        "onderdeel": ZESHONDERD_METER,
        "prestatie": "1.40,23",
        "punten": "(689)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "4248 pnt"
      }
    ],
    "plaats": "Amstelveen",
    "datum": "9/10-06-2019"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren C';
  return resultaat;
})
