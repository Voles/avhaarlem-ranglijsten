export default [
  {
    "onderdeel": "80 meter",
    "naam": "Aneska de Windt",
    "prestatie": "10,64 (10,4)",
    "plaats": "",
    "datum": "1988"
  },
  {
    "onderdeel": "80 meter",
    "naam": "Marjanne van Sambeek",
    "prestatie": "10,64 (10,4)",
    "plaats": "Amsterdam",
    "datum": "21-08-1993"
  },
  {
    "onderdeel": "150 meter",
    "naam": "Tara van Schie",
    "prestatie": "19,54 (10,3)",
    "plaats": "Beverwijk",
    "datum": "03-07-2004"
  },
  {
    "onderdeel": "200 meter",
    "naam": "Babs Koeman",
    "prestatie": "28,46",
    "plaats": "Edam",
    "datum": "13-05-2018"
  },
  {
    "onderdeel": "300 meter",
    "naam": "Babs Koeman",
    "prestatie": "47,84",
    "plaats": "Haarlem",
    "datum": "25-03-2018"
  },
  {
    "onderdeel": "400 meter",
    "naam": "Babs Koeman",
    "prestatie": "1.03,43",
    "plaats": "Heerhugowaard",
    "datum": "10-06-2018"
  },
  {
    "onderdeel": "600 meter",
    "naam": "Babs Koeman",
    "prestatie": "1.41,62",
    "plaats": "Amstelveen",
    "datum": "21-05-2018"
  },
  {
    "onderdeel": "800 meter",
    "naam": "Babs Koeman",
    "prestatie": "2.31,56",
    "plaats": "Haarlem",
    "datum": "08-06-2018"
  },
  {
    "onderdeel": "1000 meter",
    "naam": "Larissa Scholten",
    "prestatie": "3.10,64",
    "plaats": "Utrecht",
    "datum": "22-06-2002"
  },
  {
    "onderdeel": "1500 meter",
    "naam": "Babs Koeman",
    "prestatie": "5.15,44",
    "plaats": "Assendelft",
    "datum": "25-05-2018"
  },
  {
    "onderdeel": "80 meter horden",
    "naam": "Marije Zandstra",
    "prestatie": "12,84 (12,6)",
    "plaats": "Zaandam",
    "datum": "14-06-1997"
  },
  {
    "onderdeel": "300 meter horden",
    "naam": "Babs Koeman",
    "prestatie": "48,66",
    "plaats": "Heiloo",
    "datum": "22-06-2018"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": "Sanne Immer",
    "prestatie": "1.60",
    "plaats": "Krommenie",
    "datum": "19-08-2000"
  },
  {
    "onderdeel": "",
    "naam": "Sanne Immer",
    "prestatie": "1.60",
    "plaats": "Amsterdam",
    "datum": "26-08-2000"
  },
  {
    "onderdeel": "polsstokhoogspringen",
    "naam": "Mette Elgersma",
    "prestatie": "2.40",
    "plaats": "Heerhugowaard",
    "datum": "02-06-2017"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Marjanne van Sambeek",
    "prestatie": "5.31",
    "plaats": "Beverwijk",
    "datum": "05-06-1993"
  },
  {
    "onderdeel": "kogelstoten",
    "naam": "Wendy IJzerman",
    "prestatie": "12.07",
    "plaats": "Amersfoort",
    "datum": "24-04-1993"
  },
  {
    "onderdeel": "discuswerpen",
    "naam": "Wendy IJzerman",
    "prestatie": "24.92",
    "plaats": "Beverwijk",
    "datum": "05-06-1993"
  },
  {
    "onderdeel": "speerwerpen",
    "naam": "Iris Komen",
    "prestatie": "31.63",
    "plaats": "Santpoort",
    "datum": "24-05-2014"
  },
  {
    "onderdeel": "4 x 80 meter",
    "naam": ["Sanna Piscaer", "Janna de Waard", "Marije Zandstra", "Baltine de Wit"],
    "prestatie": "41,94 (41,7)",
    "plaats": "Heerhugowaard",
    "datum": "17-06-1996"
  },
  {
    "onderdeel": "zevenkamp",
    "naam": "Babs Koeman",
    "prestatie": [
      {
        "onderdeel": "80 meter horden",
        "prestatie": "13,17 s",
        "punten": "(569)"
      },
      {
        "onderdeel": "hoogspringen",
        "prestatie": "1.47 m",
        "punten": "(599)"
      },
      {
        "onderdeel": "kogelstoten",
        "prestatie": "8.75 m",
        "punten": "(460)"
      },
      {
        "onderdeel": "150 meter",
        "prestatie": "20,02 s",
        "punten": "(617)"
      },
      {
        "onderdeel": "verspringen",
        "prestatie": "5.06 m",
        "punten": "(632)"
      },
      {
        "onderdeel": "speerwerpen",
        "prestatie": "27.86 m",
        "punten": "(461)"
      },
      {
        "onderdeel": "600 meter",
        "prestatie": "1.42,02 s",
        "punten": "(661)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "3999 pnt"
      }
    ],
    "plaats": "Lisse",
    "datum": "07/08-07-2018"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren C';
  return resultaat;
})
