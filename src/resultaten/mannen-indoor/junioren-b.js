import {
  ACHTHONDERD_METER,
  DERTIG_METER,
  DRIE_KILOMETER_SNELWANDELEN,
  DRIEDUIZEND_METER, DUIZEND_METER,
  DUIZENDVIJFHONDERD_METER,
  HINKSTAPSPRINGEN,
  HOOGSPRINGEN,
  KOGELSTOTEN,
  POLSSTOKHOOGSPRINGEN,
  TWEEHONDERD_METER,
  VERSPRINGEN,
  VIERHONDERD_METER,
  VIJFTIG_METER,
  VIJFTIG_METER_HORDEN,
  ZESTIG_METER, ZESTIG_METER_HORDEN
} from "../../constants/onderdelen";

export default [
  {
    "onderdeel": DERTIG_METER,
    "naam": "Erick Könst",
    "prestatie": "5,09",
    "plaats": "Heerde",
    "datum": "24-11-2018"
  },
  {
    "onderdeel": VIJFTIG_METER,
    "naam": "Mario Westbroek",
    "prestatie": "6,24 (6,0)",
    "plaats": "Groningen",
    "datum": "14-01-1983"
  },
  {
    "onderdeel": ZESTIG_METER,
    "naam": "Hein Macknack",
    "prestatie": "7,04 (6,8)",
    "plaats": "Dortmund (D)",
    "datum": "23-12-1984"
  },
  {
    "onderdeel": TWEEHONDERD_METER,
    "naam": "Hein Macknack",
    "prestatie": "23,14 (22,9)",
    "plaats": "Dortmund (D)",
    "datum": "23-12-1984"
  },
  {
    "onderdeel": VIERHONDERD_METER,
    "naam": "Pim Pauel",
    "prestatie": "54,21",
    "plaats": "Apeldoorn",
    "datum": "24-01-2015"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Frans Capellen",
    "prestatie": "2.03,4",
    "plaats": "Arnhem",
    "datum": "26-01-1975"
  },
  {
    "onderdeel": DUIZEND_METER,
    "naam": "Stein Metten",
    "prestatie": "2.54,19",
    "plaats": "Gent (B)",
    "datum": "27-02-2005"
  },
  {
    "onderdeel": DUIZENDVIJFHONDERD_METER,
    "naam": "Paul Jaspers",
    "prestatie": "4.11,43",
    "plaats": "Zuid-Laren",
    "datum": "13-02-1982"
  },
  {
    "onderdeel": DRIEDUIZEND_METER,
    "naam": "Paul Jaspers",
    "prestatie": "9.06,7",
    "plaats": "Zuid-Laren",
    "datum": "20-12-1981"
  },
  {
    "onderdeel": VIJFTIG_METER_HORDEN,
    "naam": "Sjoerd Lether",
    "prestatie": "8,24 (8,0)",
    "plaats": "Utrecht",
    "datum": "23-11-2002"
  },
  {
    "onderdeel": ZESTIG_METER_HORDEN,
    "naam": "Walter Kruk",
    "prestatie": "8,37",
    "plaats": "Zwolle",
    "datum": "25-01-1987"
  },
  {
    "onderdeel": DRIE_KILOMETER_SNELWANDELEN,
    "naam": "Frank van Ravensberg",
    "prestatie": "14.50,8",
    "plaats": "Rotterdam",
    "datum": "15-02-1977"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Walter Kruk",
    "prestatie": "2,01",
    "plaats": "Dortmund (D)",
    "datum": "28-12-1986"
  },
  {
    "onderdeel": POLSSTOKHOOGSPRINGEN,
    "naam": "Kenneth Portanger",
    "prestatie": "3,80",
    "plaats": "Beverwijk",
    "datum": "22-02-1981"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Hein Macknack",
    "prestatie": "7,09",
    "plaats": "Zwolle",
    "datum": "22-01-1984"
  },
  {
    "onderdeel": HINKSTAPSPRINGEN,
    "naam": "Arjan Warmerdam",
    "prestatie": "13,18",
    "plaats": "Düsseldorf (D)",
    "datum": "03-02-1985"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Stein Metten",
    "prestatie": "13,12",
    "plaats": "Gent (B)",
    "datum": "26-02-2005"
  },
  {
    "onderdeel": "meerkamp",
    "naam": "Stein Metten",
    "datum": "26/27-02-2005",
    "plaats": "Gent (B)",
    "prestatie": [
      {
        "onderdeel": ZESTIG_METER,
        "prestatie": "7,76",
        "punten": "(631)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "5,67",
        "punten": "(516)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "13,12",
        "punten": "(675)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1,60",
        "punten": "(464)"
      },
      {
        "onderdeel": ZESTIG_METER_HORDEN,
        "prestatie": "8,85",
        "punten": "(779)"
      },
      {
        "onderdeel": POLSSTOKHOOGSPRINGEN,
        "prestatie": "3,40",
        "punten": "(457)"
      },
      {
        "onderdeel": DUIZEND_METER,
        "prestatie": "2.54,19",
        "punten": "(722)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "4244"
      }
    ]
  }
]
  .map(resultaat => {
  resultaat.categorie = 'Junioren B';
  return resultaat;
});
