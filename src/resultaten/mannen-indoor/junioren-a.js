import {
  ACHTHONDERD_METER, DRIE_KILOMETER_SNELWANDELEN, DRIEDUIZEND_METER,
  DUIZEND_METER,
  DUIZENDVIJFHONDERD_METER, HINKSTAPSPRINGEN, HOOGSPRINGEN, KOGELSTOTEN, POLSSTOKHOOGSPRINGEN,
  TWEEHONDERD_METER, VERSPRINGEN,
  VIERHONDERD_METER, VIJFTIG_METER, VIJFTIG_METER_HORDEN, ZESTIG_METER, ZESTIG_METER_HORDEN, ZEVENKAMP
} from "../../constants/onderdelen";

export default [
  {
    "onderdeel": VIJFTIG_METER,
    "naam": "Mario Westbroek",
    "prestatie": "6,24",
    "plaats": "Groningen",
    "datum": "14-01-1978"
  },
  {
    "onderdeel": ZESTIG_METER,
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
    "onderdeel": DRIEDUIZEND_METER,
    "naam": "Paul Jaspers",
    "prestatie": "8.18,84",
    "plaats": "Zuid-Laren",
    "datum": "11-02-1984"
  },
  {
    "onderdeel": VIJFTIG_METER_HORDEN,
    "naam": "Sjoerd Lether (B)",
    "prestatie": "8,24 (8,0)",
    "plaats": "Utrecht",
    "datum": "23-11-2002"
  },
  {
    "onderdeel": ZESTIG_METER_HORDEN,
    "naam": "Chris van der Werff",
    "prestatie": "8,61",
    "plaats": "Zwolle",
    "datum": "17-01-1988"
  },
  {
    "onderdeel": DRIE_KILOMETER_SNELWANDELEN,
    "naam": "Frank van Ravensberg",
    "prestatie": "14.18,5",
    "plaats": "Rotterdam",
    "datum": "10-02-1979"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Ruud Wielart",
    "prestatie": "2,11",
    "plaats": "Leiden",
    "datum": "24-02-1973"
  },
  {
    "onderdeel": POLSSTOKHOOGSPRINGEN,
    "naam": "Arno van Vugt",
    "prestatie": "4,20",
    "plaats": "Rotterdam",
    "datum": "20-02-1982"
  },
  {
    "onderdeel": POLSSTOKHOOGSPRINGEN,
    "naam": "Kenneth Portanger",
    "prestatie": "4,20",
    "plaats": "Parijs (F)",
    "datum": "22-12-1982"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Hein Macknack",
    "prestatie": "7,43",
    "plaats": "Maastricht",
    "datum": "02-02-1985"
  },
  {
    "onderdeel": HINKSTAPSPRINGEN,
    "naam": "Hein Macknack",
    "prestatie": "14,75",
    "plaats": "Maastricht",
    "datum": "03-02-1985"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Martijn Spruit",
    "prestatie": "14,71",
    "plaats": "Den Haag",
    "datum": "27-02-1994"
  },
  {
    "onderdeel": ZEVENKAMP,
    "naam": "Stein Metten",
    "datum": "04/05-02-2006",
    "plaats": "Gent (B)",
    "prestatie": [
      {
        "onderdeel": ZESTIG_METER,
        "prestatie": "7,77",
        "punten": "(628)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "6,00",
        "punten": "(587)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "12,39",
        "punten": "(630)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1,62",
        "punten": "(480)"
      },
      {
        "onderdeel": ZESTIG_METER_HORDEN,
        "prestatie": "9,67",
        "punten": "(605)"
      },
      {
        "onderdeel": POLSSTOKHOOGSPRINGEN,
        "prestatie": "3,40",
        "punten": "(457)"
      },
      {
        "onderdeel": DUIZEND_METER,
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
