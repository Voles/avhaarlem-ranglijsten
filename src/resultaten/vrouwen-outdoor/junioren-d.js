export default [
  {
    "onderdeel": "60 meter",
    "naam": "Marjanne van Sambeek",
    "prestatie": "8,14 s (7,9)",
    "plaats": "Krommenie",
    "datum": "28-05-1992"
  },
  {
    "onderdeel": "150 meter",
    "naam": "Babs Koeman",
    "prestatie": "21,03",
    "plaats": "Naaldwijk",
    "datum": "20-08-2017"
  },
  {
    "onderdeel": "400 meter",
    "naam": "Babs Koeman",
    "prestatie": "1.05,03",
    "plaats": "Barendrecht",
    "datum": "09-09-2017"
  },
  {
    "onderdeel": "600 meter",
    "naam": "Babs Koeman",
    "prestatie": "1.45,26",
    "plaats": "Zoetermeer",
    "datum": "23-09-2017"
  },
  {
    "onderdeel": "800 meter",
    "naam": "Babs Koeman",
    "prestatie": "2.41,46",
    "plaats": "Beverwijk",
    "datum": "27-05-2016"
  },
  {
    "onderdeel": "1000 meter",
    "naam": "Pien Roozen",
    "prestatie": "3.15,85",
    "plaats": "Amsterdam",
    "datum": "07-09-2003"
  },
  {
    "onderdeel": "1500 meter",
    "naam": "Babs Koeman",
    "prestatie": "5.37,07",
    "plaats": "Hoofddorp",
    "datum": "15-04-2016"
  },
  {
    "onderdeel": "60 meter horden",
    "naam": "Joanna Andrews",
    "prestatie": "10,14 (9,9)",
    "plaats": "Krommenie",
    "datum": "28-05-1992"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": "Baltine de Wit",
    "prestatie": "1.55",
    "plaats": "Enschede",
    "datum": "16-09-1995"
  },
  {
    "onderdeel": "polsstokhoogspringen",
    "naam": "Babs Koeman",
    "prestatie": "1.85",
    "plaats": "Haarlem",
    "datum": "19-05-2017"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Marjanne van Sambeek",
    "prestatie": "5.12",
    "plaats": "Amsterdam",
    "datum": "13-06-1992"
  },
  {
    "onderdeel": "kogelstoten",
    "naam": "Sanna Piscaer",
    "prestatie": "11.80",
    "plaats": "Hilversum",
    "datum": "18-06-1994"
  },
  {
    "onderdeel": "discuswerpen",
    "naam": "Anne Kuperus",
    "prestatie": "23.23",
    "plaats": "Amsterdam",
    "datum": "08-09-2013"
  },
  {
    "onderdeel": "speerwerpen",
    "naam": "Babs Koeman",
    "prestatie": "31.48",
    "plaats": "Naaldwijk",
    "datum": "20-08-2017"
  },
  {
    "onderdeel": "4 x 60 meter",
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
    "onderdeel": "zeskamp",
    "naam": "Babs Koeman",
    "plaats": "Lisse",
    "datum": "08/09-07-2017",
    "prestatie": [
      {
        "onderdeel": "60 meter horden",
        "prestatie": "10,41",
        "punten": "(554)"
      },
      {
        "onderdeel": "hoogspringen",
        "prestatie": "1.47",
        "punten": "(599)"
      },
      {
        "onderdeel": "speerwerpen",
        "prestatie": "28.59",
        "punten": "(473)"
      },
      {
        "onderdeel": "verspringen",
        "prestatie": "4.91",
        "punten": "(603)"
      },
      {
        "onderdeel": "kogelstoten",
        "prestatie": "9.52",
        "punten": "(499)"
      },
      {
        "onderdeel": "600 m",
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