import { VIERHONDERD_METER } from "../../constants/onderdelen";

export default [
  {
    "onderdeel": "30 meter",
    "naam": "Erick Könst",
    "prestatie": "5,09",
    "plaats": "Heerde",
    "datum": "24-11-2018"
  },
  {
    "onderdeel": "50 meter",
    "naam": "Mario Westbroek",
    "prestatie": "6,24 (6,0)",
    "plaats": "Groningen",
    "datum": "14-01-1983"
  },
  {
    "onderdeel": "60 meter",
    "naam": "Hein Macknack",
    "prestatie": "7,04 (6,8)",
    "plaats": "Dortmund (D)",
    "datum": "23-12-1984"
  },
  {
    "onderdeel": "200 meter",
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
    "onderdeel": "800 meter",
    "naam": "Frans Capellen",
    "prestatie": "2.03,4",
    "plaats": "Arnhem",
    "datum": "26-01-1975"
  },
  {
    "onderdeel": "1000 meter",
    "naam": "Stein Metten",
    "prestatie": "2.54,19",
    "plaats": "Gent (B)",
    "datum": "27-02-2005"
  },
  {
    "onderdeel": "1500 meter",
    "naam": "Paul Jaspers",
    "prestatie": "4.11,43",
    "plaats": "Zuid-Laren",
    "datum": "13-02-1982"
  },
  {
    "onderdeel": "3000 meter",
    "naam": "Paul Jaspers",
    "prestatie": "9.06,7",
    "plaats": "Zuid-Laren",
    "datum": "20-12-1981"
  },
  {
    "onderdeel": "50 meter horden",
    "naam": "Sjoerd Lether",
    "prestatie": "8,24 (8,0)",
    "plaats": "Utrecht",
    "datum": "23-11-2002"
  },
  {
    "onderdeel": "60 meter horden",
    "naam": "Walter Kruk",
    "prestatie": "8,37",
    "plaats": "Zwolle",
    "datum": "25-01-1987"
  },
  {
    "onderdeel": "3 km snelwandelen",
    "naam": "Frank van Ravensberg",
    "prestatie": "14.50,8",
    "plaats": "Rotterdam",
    "datum": "15-02-1977"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": "Walter Kruk",
    "prestatie": "2,01",
    "plaats": "Dortmund (D)",
    "datum": "28-12-1986"
  },
  {
    "onderdeel": "polsstokhoogspringen",
    "naam": "Kenneth Portanger",
    "prestatie": "3,80",
    "plaats": "Beverwijk",
    "datum": "22-02-1981"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Hein Macknack",
    "prestatie": "7,09",
    "plaats": "Zwolle",
    "datum": "22-01-1984"
  },
  {
    "onderdeel": "hinkstapspringen",
    "naam": "Arjan Warmerdam",
    "prestatie": "13,18",
    "plaats": "Düsseldorf (D)",
    "datum": "03-02-1985"
  },
  {
    "onderdeel": "kogelstoten",
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
        "onderdeel": "60 meter",
        "prestatie": "7,76",
        "punten": "(631)"
      },
      {
        "onderdeel": "verspringen",
        "prestatie": "5,67",
        "punten": "(516)"
      },
      {
        "onderdeel": "kogelstoten",
        "prestatie": "13,12",
        "punten": "(675)"
      },
      {
        "onderdeel": "hoogspringen",
        "prestatie": "1,60",
        "punten": "(464)"
      },
      {
        "onderdeel": "60 meter horden",
        "prestatie": "8,85",
        "punten": "(779)"
      },
      {
        "onderdeel": "polsstokhoogspringen",
        "prestatie": "3,40",
        "punten": "(457)"
      },
      {
        "onderdeel": "1000 m",
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
