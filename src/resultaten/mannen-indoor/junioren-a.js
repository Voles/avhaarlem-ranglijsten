import {
  ACHTHONDERD_METER,
  DUIZEND_METER,
  DUIZENDVIJFHONDERD_METER,
  TWEEHONDERD_METER,
  VIERHONDERD_METER
} from "../../constants/onderdelen";

export default [
  {
    "onderdeel": "50 meter",
    "naam": "Mario Westbroek",
    "prestatie": "6,24",
    "plaats": "Groningen",
    "datum": "14-01-1978"
  },
  {
    "onderdeel": "60 meter",
    "naam": "Mario Westbroek",
    "prestatie": "6,99",
    "plaats": "Zwolle",
    "datum": "28-01-1979"
  },
  {
    "onderdeel": TWEEHONDERD_METER,
    "naam": "Allan Ellsworth",
    "prestatie": "22,54 (22,3)",
    "plaats": "Dortmund (D)",
    "datum": "08-03-1981"
  },
  {
    "onderdeel": VIERHONDERD_METER,
    "naam": "Allan Ellsworth",
    "prestatie": "48,53",
    "plaats": "Rotterdam",
    "datum": "13-02-1983"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Ron Koridon",
    "prestatie": "1.57,5",
    "plaats": "Rotterdam",
    "datum": "20-02-1971"
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
    "prestatie": "3.51,0",
    "plaats": "Dortmund (D)",
    "datum": "29-01-1984"
  },
  {
    "onderdeel": "3000 meter",
    "naam": "Paul Jaspers",
    "prestatie": "8.18,84",
    "plaats": "Zuid-Laren",
    "datum": "11-02-1984"
  },
  {
    "onderdeel": "50 meter horden",
    "naam": "Sjoerd Lether (B)",
    "prestatie": "8,24 (8,0)",
    "plaats": "Utrecht",
    "datum": "23-11-2002"
  },
  {
    "onderdeel": "60 meter horden",
    "naam": "Chris van der Werff",
    "prestatie": "8,61",
    "plaats": "Zwolle",
    "datum": "17-01-1988"
  },
  {
    "onderdeel": "3 km snelwandelen",
    "naam": "Frank van Ravensberg",
    "prestatie": "14.18,5",
    "plaats": "Rotterdam",
    "datum": "10-02-1979"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": "Ruud Wielart",
    "prestatie": "2,11",
    "plaats": "Leiden",
    "datum": "24-02-1973"
  },
  {
    "onderdeel": "polsstokhoogspringen",
    "naam": "Arno van Vugt",
    "prestatie": "4,20",
    "plaats": "Rotterdam",
    "datum": "20-02-1982"
  },
  {
    "onderdeel": "polsstokhoogspringen",
    "naam": "Kenneth Portanger",
    "prestatie": "4,20",
    "plaats": "Parijs (F)",
    "datum": "22-12-1982"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Hein Macknack",
    "prestatie": "7,43",
    "plaats": "Maastricht",
    "datum": "02-02-1985"
  },
  {
    "onderdeel": "hinkstapspringen",
    "naam": "Hein Macknack",
    "prestatie": "14,75",
    "plaats": "Maastricht",
    "datum": "03-02-1985"
  },
  {
    "onderdeel": "kogelstoten",
    "naam": "Martijn Spruit",
    "prestatie": "14,71",
    "plaats": "Den Haag",
    "datum": "27-02-1994"
  },
  {
    "onderdeel": "7-kamp",
    "naam": "Stein Metten",
    "datum": "04/05-02-2006",
    "plaats": "Gent (B)",
    "prestatie": [
      {
        "onderdeel": "60 meter",
        "prestatie": "7,77",
        "punten": "(628)"
      },
      {
        "onderdeel": "verspringen",
        "prestatie": "6,00",
        "punten": "(587)"
      },
      {
        "onderdeel": "kogelstoten",
        "prestatie": "12,39",
        "punten": "(630)"
      },
      {
        "onderdeel": "hoogspringen",
        "prestatie": "1,62",
        "punten": "(480)"
      },
      {
        "onderdeel": "60 meter horden",
        "prestatie": "9,67",
        "punten": "(605)"
      },
      {
        "onderdeel": "polsstokhoogspringen",
        "prestatie": "3,40",
        "punten": "(457)"
      },
      {
        "onderdeel": "1000 m",
        "prestatie": "3.06,44",
        "punten": "(603)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "3990"
      }
    ]
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren A';
  return resultaat;
});
