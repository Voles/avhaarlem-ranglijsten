import {
  ACHTHONDERD_METER,
  DISCUSWERPEN,
  DUIZEND_METER,
  DUIZENDVIJFHONDERD_METER,
  HONDERDVIJFTIG_METER,
  HOOGSPRINGEN,
  KOGELSTOTEN,
  POLSSTOKHOOGSPRINGEN,
  SPEERWERPEN,
  VERSPRINGEN, VIER_KEER_ZESTIG_METER,
  VIERHONDERD_METER,
  ZESHONDERD_METER, ZESKAMP,
  ZESTIG_METER,
  ZESTIG_METER_HORDEN
} from "../../constants/onderdelen";

export default [
  {
    "onderdeel": ZESTIG_METER,
    "naam": "Marjanne van Sambeek",
    "prestatie": "8,14 s (7,9)",
    "plaats": "Krommenie",
    "datum": "28-05-1992"
  },
  {
    "onderdeel": HONDERDVIJFTIG_METER,
    "naam": "Babs Koeman",
    "prestatie": "21,03",
    "plaats": "Naaldwijk",
    "datum": "20-08-2017"
  },
  {
    "onderdeel": VIERHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "1.05,03",
    "plaats": "Barendrecht",
    "datum": "09-09-2017"
  },
  {
    "onderdeel": ZESHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "1.45,26",
    "plaats": "Zoetermeer",
    "datum": "23-09-2017"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "2.41,46",
    "plaats": "Beverwijk",
    "datum": "27-05-2016"
  },
  {
    "onderdeel": DUIZEND_METER,
    "naam": "Pien Roozen",
    "prestatie": "3.15,85",
    "plaats": "Amsterdam",
    "datum": "07-09-2003"
  },
  {
    "onderdeel": DUIZENDVIJFHONDERD_METER,
    "naam": "Babs Koeman",
    "prestatie": "5.37,07",
    "plaats": "Hoofddorp",
    "datum": "15-04-2016"
  },
  {
    "onderdeel": ZESTIG_METER_HORDEN,
    "naam": "Joanna Andrews",
    "prestatie": "10,14 (9,9)",
    "plaats": "Krommenie",
    "datum": "28-05-1992"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Baltine de Wit",
    "prestatie": "1.55",
    "plaats": "Enschede",
    "datum": "16-09-1995"
  },
  {
    "onderdeel": POLSSTOKHOOGSPRINGEN,
    "naam": "Babs Koeman",
    "prestatie": "1.85",
    "plaats": "Haarlem",
    "datum": "19-05-2017"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Marjanne van Sambeek",
    "prestatie": "5.12",
    "plaats": "Amsterdam",
    "datum": "13-06-1992"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Sanna Piscaer",
    "prestatie": "11.80",
    "plaats": "Hilversum",
    "datum": "18-06-1994"
  },
  {
    "onderdeel": DISCUSWERPEN,
    "naam": "Anne Kuperus",
    "prestatie": "23.23",
    "plaats": "Amsterdam",
    "datum": "08-09-2013"
  },
  {
    "onderdeel": SPEERWERPEN,
    "naam": "Babs Koeman",
    "prestatie": "31.48",
    "plaats": "Naaldwijk",
    "datum": "20-08-2017"
  },
  {
    "onderdeel": VIER_KEER_ZESTIG_METER,
    "naam": [
      "Jessica Ramakers",
      "Wendy Twisk",
      "Marjanne van Sambeek",
      "Joanna Andrews"
    ],
    "prestatie": "33,54 (33,3)",
    "plaats": "Santpoort",
    "datum": "22-06-1991"
  },
  {
    "onderdeel": ZESKAMP,
    "naam": "Babs Koeman",
    "plaats": "Lisse",
    "datum": "08/09-07-2017",
    "prestatie": [
      {
        "onderdeel": ZESTIG_METER_HORDEN,
        "prestatie": "10,41",
        "punten": "(554)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1.47",
        "punten": "(599)"
      },
      {
        "onderdeel": SPEERWERPEN,
        "prestatie": "28.59",
        "punten": "(473)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "4.91",
        "punten": "(603)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "9.52",
        "punten": "(499)"
      },
      {
        "onderdeel": ZESHONDERD_METER,
        "prestatie": "1.46,00",
        "punten": "(602)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "3330 pnt"
      }
    ]
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren D';
  return resultaat;
})