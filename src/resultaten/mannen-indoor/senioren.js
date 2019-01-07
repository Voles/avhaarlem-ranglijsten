import {
  ACHTHONDERD_METER,
  DRIEDUIZEND_METER,
  DUIZEND_METER,
  DUIZENDVIJFHONDERD_METER,
  HINKSTAPSPRINGEN,
  HOOGSPRINGEN, KOGELSTOTEN,
  POLSSTOKHOOGSPRINGEN,
  TWEEHONDERD_METER,
  VERSPRINGEN, VIER_KEER_TWEEHONDERD_METER,
  VIERHONDERD_METER,
  VIJF_KILOMETER_SNELWANDELEN,
  VIJFTIG_METER,
  VIJFTIG_METER_HORDEN,
  ZESTIG_METER,
  ZESTIG_METER_HORDEN, ZEVENKAMP, ZWEEDSE_ESTAFETTE
} from "../../constants/onderdelen";

export default [
  {
    "onderdeel": VIJFTIG_METER,
    "naam": "Guus Groskamp",
    "prestatie": "6,08",
    "plaats": "Zwolle",
    "datum": "20-01-1996"
  },
  {
    "onderdeel": ZESTIG_METER,
    "naam": "Mario Westbroek",
    "prestatie": "6,82",
    "plaats": "Rotterdam",
    "datum": "21-02-1982"
  },
  {
    "onderdeel": TWEEHONDERD_METER,
    "naam": "Jurgen Wielart",
    "prestatie": "21,99",
    "plaats": "Apeldoorn",
    "datum": "05-01-2013"
  },
  {
    "onderdeel": VIERHONDERD_METER,
    "naam": "Allan Ellsworth",
    "prestatie": "47,90",
    "plaats": "Maastricht",
    "datum": "02-02-1984"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Jan de Ruiter",
    "prestatie": "1.54,74",
    "plaats": "Den Haag",
    "datum": "16-02-1991"
  },
  {
    "onderdeel": DUIZEND_METER,
    "naam": "vacant",
    "prestatie": "",
    "plaats": "",
    "datum": ""
  },
  {
    "onderdeel": DUIZENDVIJFHONDERD_METER,
    "naam": "Stijn Jaspers",
    "prestatie": "3.44,8",
    "plaats": "Amerika",
    "datum": "11-02-1983"
  },
  {
    "onderdeel": DRIEDUIZEND_METER,
    "naam": "Paul Jaspers",
    "prestatie": "8.04,01",
    "plaats": "Den Haag",
    "datum": "04-02-1989"
  },
  {
    "onderdeel": VIJFTIG_METER_HORDEN,
    "naam": "Marc Kok",
    "prestatie": "6,88",
    "plaats": "Zwolle",
    "datum": "21-01-1989"
  },
  {
    "onderdeel": ZESTIG_METER_HORDEN,
    "naam": "Marc Kok",
    "prestatie": "8,06",
    "plaats": "Den Haag",
    "datum": "05-02-1989"
  },
  {
    "onderdeel": VIJF_KILOMETER_SNELWANDELEN,
    "naam": "Frank van Ravensberg",
    "prestatie": "22.04,9",
    "plaats": "Zuid-Laren",
    "datum": "12-02-1984"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Ruud Wielart",
    "prestatie": "2,26",
    "plaats": "Rotterdam",
    "datum": "17-02-1980"
  },
  {
    "onderdeel": POLSSTOKHOOGSPRINGEN,
    "naam": "Pim Göbel",
    "prestatie": "4,86",
    "plaats": "Zwolle",
    "datum": "31-01-1981"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Hein Macknack (A)",
    "prestatie": "7,43",
    "plaats": "Maastricht",
    "datum": "02-02-1985"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Hein Macknack",
    "prestatie": "7,43",
    "plaats": "Den Haag",
    "datum": "07-02-1987"
  },
  {
    "onderdeel": HINKSTAPSPRINGEN,
    "naam": "Anne Jan van der Veen",
    "prestatie": "15,51",
    "plaats": "Zuid-Laren",
    "datum": "12-02-1984"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Rob Bakker",
    "prestatie": "16,98",
    "plaats": "Den Haag",
    "datum": "31-01-1993"
  },
  {
    "onderdeel": VIER_KEER_TWEEHONDERD_METER,
    "naam": ["Niels Terol", "Roel van Ree", "Erik van der Veen", "Ger Wessel"],
    "prestatie": "1.32,82",
    "plaats": "Den Haag",
    "datum": "08-02-1998"
  },
  {
    "onderdeel": ZWEEDSE_ESTAFETTE,
    "naam": ["Job Wiltink", "Daan Oppenhuis", "Dik de Groot", "Stefan Scholte"],
    "prestatie": "2.11,51",
    "plaats": "Apeldoorn",
    "datum": "10-03-2018"
  },
  {
    "onderdeel": ZEVENKAMP,
    "naam": "Less Brown",
    "plaats": "Zwolle",
    "datum": "21/22-01-1984",
    "prestatie": [
      {
        "onderdeel": ZESTIG_METER,
        "prestatie": "7,64",
        "punten": "(668)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "5,74",
        "punten": "(531)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "13,59",
        "punten": "(703)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1,80",
        "punten": "(627)"
      },
      {
        "onderdeel": ZESTIG_METER_HORDEN,
        "prestatie": "9,34",
        "punten": "(673)"
      },
      {
        "onderdeel": POLSSTOKHOOGSPRINGEN,
        "prestatie": "3,40",
        "punten": "(457)"
      },
      {
        "onderdeel": DUIZEND_METER,
        "prestatie": "3.07,1",
        "punten": "(596)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "4255"
      }
    ]
  }
].map(resultaat => {
  resultaat.categorie = 'Senioren';
  return resultaat;
})
