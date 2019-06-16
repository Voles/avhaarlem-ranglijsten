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
    "prestatie": "1.41,62",
    "plaats": "Amstelveen",
    "datum": "21-05-2018"
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
    "prestatie": "12,67",
    "plaats": "Amsterdam",
    "datum": "25-05-2019"
  },
  {
    "onderdeel": DRIEHONDERD_METER_HORDEN,
    "naam": "Babs Koeman",
    "prestatie": "48,66",
    "plaats": "Heiloo",
    "datum": "22-06-2018"
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
        "prestatie": "13,12",
        "punten": "(575)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1.55",
        "punten": "(663)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "8.65",
        "punten": "(455)"
      },
      {
        "onderdeel": HONDERDVIJFTIG_METER,
        "prestatie": "21.13",
        "punten": "(521)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "4.95",
        "punten": "(611)"
      },
      {
        "onderdeel": SPEERWERPEN,
        "prestatie": "36.39",
        "punten": "(590)"
      },
      {
        "onderdeel": ZESHONDERD_METER,
        "prestatie": "1.43,76",
        "punten": "(635)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "4050 pnt"
      }
    ],
    "plaats": "Zaandam",
    "datum": "11/12-05-2019"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren C';
  return resultaat;
})
