export default [
  {
    "onderdeel": "50 meter",
    "naam": "Guus Groskamp",
    "prestatie": "6,08",
    "plaats": "Zwolle",
    "datum": "20-01-1996"
  },
  {
    "onderdeel": "60 meter",
    "naam": "Mario Westbroek",
    "prestatie": "6,82",
    "plaats": "Rotterdam",
    "datum": "21-02-1982"
  },
  {
    "onderdeel": "200 meter",
    "naam": "Jurgen Wielart",
    "prestatie": "21,99",
    "plaats": "Apeldoorn",
    "datum": "05-01-2013"
  },
  {
    "onderdeel": "400 meter",
    "naam": "Allan Ellsworth",
    "prestatie": "47,90",
    "plaats": "Maastricht",
    "datum": "02-02-1984"
  },
  {
    "onderdeel": "800 meter",
    "naam": "Jan de Ruiter",
    "prestatie": "1.54,74",
    "plaats": "Den Haag",
    "datum": "16-02-1991"
  },
  {
    "onderdeel": "1000 meter",
    "naam": "vacant",
    "prestatie": "",
    "plaats": "",
    "datum": ""
  },
  {
    "onderdeel": "1500 meter",
    "naam": "Stijn Jaspers",
    "prestatie": "3.44,8",
    "plaats": "Amerika",
    "datum": "11-02-1983"
  },
  {
    "onderdeel": "3000 meter",
    "naam": "Paul Jaspers",
    "prestatie": "8.04,01",
    "plaats": "Den Haag",
    "datum": "04-02-1989"
  },
  {
    "onderdeel": "50 meter horden",
    "naam": "Marc Kok",
    "prestatie": "6,88",
    "plaats": "Zwolle",
    "datum": "21-01-1989"
  },
  {
    "onderdeel": "60 meter horden",
    "naam": "Marc Kok",
    "prestatie": "8,06",
    "plaats": "Den Haag",
    "datum": "05-02-1989"
  },
  {
    "onderdeel": "5 km snelwandelen",
    "naam": "Frank van Ravensberg",
    "prestatie": "22.04,9",
    "plaats": "Zuid-Laren",
    "datum": "12-02-1984"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": "Ruud Wielart",
    "prestatie": "2,26",
    "plaats": "Rotterdam",
    "datum": "17-02-1980"
  },
  {
    "onderdeel": "polsstokhoogspringen",
    "naam": "Pim Göbel",
    "prestatie": "4,86",
    "plaats": "Zwolle",
    "datum": "31-01-1981"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Hein Macknack (A)",
    "prestatie": "7,43",
    "plaats": "Maastricht",
    "datum": "02-02-1985"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Hein Macknack",
    "prestatie": "7,43",
    "plaats": "Den Haag",
    "datum": "07-02-1987"
  },
  {
    "onderdeel": "hinkstapspringen",
    "naam": "Anne Jan van der Veen",
    "prestatie": "15,51",
    "plaats": "Zuid-Laren",
    "datum": "12-02-1984"
  },
  {
    "onderdeel": "kogelstoten",
    "naam": "Rob Bakker",
    "prestatie": "16,98",
    "plaats": "Den Haag",
    "datum": "31-01-1993"
  },
  {
    "onderdeel": "4 x 200 meter",
    "naam": ["Niels Terol", "Roel van Ree", "Erik van der Veen", "Ger Wessel"],
    "prestatie": "1.32,82",
    "plaats": "Den Haag",
    "datum": "08-02-1998"
  },
  {
    "onderdeel": "Zweedse Estafette",
    "naam": ["Job Wiltink", "Daan Oppenhuis", "Dik de Groot", "Stefan Scholte"],
    "prestatie": "2.11,51",
    "plaats": "Apeldoorn",
    "datum": "10-03-2018"
  },
  {
    "onderdeel": "7-kamp",
    "naam": "Less Brown",
    "plaats": "Zwolle",
    "datum": "21/22-01-1984",
    "prestatie": [
      {
        "onderdeel": "60 meter",
        "prestatie": "7,64 (7,4)",
        "punten": "(668)"
      },
      {
        "onderdeel": "verspringen",
        "prestatie": "5,74",
        "punten": "(531)"
      },
      {
        "onderdeel": "kogelstoten",
        "prestatie": "13,59",
        "punten": "(703)"
      },
      {
        "onderdeel": "hoogspringen",
        "prestatie": "1,80",
        "punten": "(627)"
      },
      {
        "onderdeel": "60 meter horden",
        "prestatie": "9,34 (9,1)",
        "punten": "(673)"
      },
      {
        "onderdeel": "polsstokhoogspringen",
        "prestatie": "3,40",
        "punten": "(457)"
      },
      {
        "onderdeel": "1000 m",
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
