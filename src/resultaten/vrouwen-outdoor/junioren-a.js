import {
  ACHTHONDERD_METER, DISCUSWERPEN,
  DUIZEND_METER, DUIZENDVIJFHONDERD_METER, HINKSTAPSPRINGEN,
  HONDERD_METER, HONDERD_METER_HORDEN, HOOGSPRINGEN, KOGELSLINGEREN, KOGELSTOTEN, POLSSTOKHOOGSPRINGEN, SPEERWERPEN,
  TWEEHONDERD_METER, VERSPRINGEN, VIER_KEER_HONDERD_METER, VIER_KEER_VIERHONDERD_METER,
  VIERHONDERD_METER, VIERHONDERD_METER_HORDEN
} from "../../constants/onderdelen";

export default [
  {
    "onderdeel": HONDERD_METER,
    "naam": "Brenda Stoete (B)",
    "prestatie": "12,74 (12,5)",
    "plaats": "Krommenie",
    "datum": "24-07-1988"
  },
  {
    "onderdeel": TWEEHONDERD_METER,
    "naam": "Brenda Stoete",
    "prestatie": "25,94 (25,7)",
    "plaats": "Amsterdam",
    "datum": "26-05-1990"
  },
  {
    "onderdeel": VIERHONDERD_METER,
    "naam": "Brenda Stoete",
    "prestatie": "60,64 (60,5)",
    "plaats": "Santpoort",
    "datum": "29-04-1990"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Ingrid de Jager",
    "prestatie": "2.16,5",
    "plaats": "Arnhem",
    "datum": "27-06-1974"
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
    "naam": "Larissa Scholten",
    "prestatie": "5.02,39",
    "plaats": "Utrecht",
    "datum": "08-07-2007"
  },
  {
    "onderdeel": HONDERD_METER_HORDEN,
    "naam": "Anja Smits",
    "prestatie": "15,24 (15,0)",
    "plaats": "Arnhem",
    "datum": "20-05-1973"
  },
  {
    "onderdeel": VIERHONDERD_METER_HORDEN,
    "naam": "Jirina van Kesteren",
    "prestatie": "67,75",
    "plaats": "Helmond",
    "datum": "24-06-2005"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Anja Smits",
    "prestatie": "1.65",
    "plaats": "Arnhem",
    "datum": "20-05-1973"
  },
  {
    "onderdeel": POLSSTOKHOOGSPRINGEN,
    "naam": "Mette Elgersma (B)",
    "prestatie": "2.60",
    "plaats": "Alkmaar",
    "datum": "27-05-2018"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Anja Smits",
    "prestatie": "5.73",
    "plaats": "Arnhem",
    "datum": "20-05-1973"
  },
  {
    "onderdeel": HINKSTAPSPRINGEN,
    "naam": "Sanne Immer",
    "prestatie": "11.16 m (rw +0,0 m/s)",
    "plaats": "Sittard",
    "datum": "26-06-2004"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Baltine de Wit",
    "prestatie": "10.79",
    "plaats": "Haarlem",
    "datum": "23-05-2001"
  },
  {
    "onderdeel": DISCUSWERPEN,
    "naam": "Brenda Stoete",
    "prestatie": "23.26",
    "plaats": "Beverwijk",
    "datum": "27-05-1988"
  },
  {
    "onderdeel": SPEERWERPEN,
    "naam": "Ingeborg Zandbergen (B)",
    "prestatie": "31.10",
    "plaats": "Alphen aan den Rijn",
    "datum": "12-06-1994"
  },
  {
    "onderdeel": KOGELSLINGEREN,
    "naam": "vacant",
    "prestatie": "",
    "plaats": "",
    "datum": ""
  },
  {
    "onderdeel": VIER_KEER_HONDERD_METER,
    "naam": ["Aneska de Windt","Chantal Bruyn","Kivelly Grotendorst","Brenda Stoete"],
    "prestatie": "50,64 (50,5)",
    "plaats": "Lisse",
    "datum": "24-06-1990"
  },
  {
    "onderdeel": VIER_KEER_VIERHONDERD_METER,
    "naam": "vacant",
    "prestatie": "",
    "plaats": "",
    "datum": ""
  },
  {
    "onderdeel": "zevenkamp",
    "naam": "Tara van Schie",
    "prestatie": [
      {
        "onderdeel": HONDERD_METER_HORDEN,
        "prestatie": "16,68",
        "punten": "(633)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1.54",
        "punten": "(666)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "9.72",
        "punten": "(511)"
      },
      {
        "onderdeel": TWEEHONDERD_METER,
        "prestatie": "26,31",
        "punten": "(770)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "5.36",
        "punten": "(660)"
      },
      {
        "onderdeel": SPEERWERPEN,
        "prestatie": "26.99",
        "punten": "(420)"
      },
      {
        "onderdeel": ACHTHONDERD_METER,
        "prestatie": "2.46,43",
        "punten": "(501)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "4161 pnt"
      }
    ],
    "plaats": "Sittard",
    "datum": "11/12-05-2008"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren A';
  return resultaat;
})
