export default [
  {
    "onderdeel": "100 meter",
    "naam": "Brenda Stoete (B)",
    "prestatie": "12,74 (12,5)",
    "plaats": "Krommenie",
    "datum": "24-07-1988"
  },
  {
    "onderdeel": "200 meter",
    "naam": "Brenda Stoete",
    "prestatie": "25,94 (25,7)",
    "plaats": "Amsterdam",
    "datum": "26-05-1990"
  },
  {
    "onderdeel": "400 meter",
    "naam": "Brenda Stoete",
    "prestatie": "60,64 (60,5)",
    "plaats": "Santpoort",
    "datum": "29-04-1990"
  },
  {
    "onderdeel": "800 meter",
    "naam": "Ingrid de Jager",
    "prestatie": "2.16,5",
    "plaats": "Arnhem",
    "datum": "27-06-1974"
  },
  {
    "onderdeel": "1000 meter",
    "naam": "Larissa Scholten (C)",
    "prestatie": "3.10,64",
    "plaats": "Utrecht",
    "datum": "22-06-2002"
  },
  {
    "onderdeel": "1500 meter",
    "naam": "Larissa Scholten",
    "prestatie": "5.02,39",
    "plaats": "Utrecht",
    "datum": "08-07-2007"
  },
  {
    "onderdeel": "100 meter horden",
    "naam": "Anja Smits",
    "prestatie": "15,24 (15,0)",
    "plaats": "Arnhem",
    "datum": "20-05-1973"
  },
  {
    "onderdeel": "400 meter horden",
    "naam": "Jirina van Kesteren",
    "prestatie": "67,75",
    "plaats": "Helmond",
    "datum": "24-06-2005"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": "Anja Smits",
    "prestatie": "1.65",
    "plaats": "Arnhem",
    "datum": "20-05-1973"
  },
  {
    "onderdeel": "polsstokhoogspringen",
    "naam": "Mette Elgersma (B)",
    "prestatie": "2.60",
    "plaats": "Alkmaar",
    "datum": "27-05-2018"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Anja Smits",
    "prestatie": "5.73",
    "plaats": "Arnhem",
    "datum": "20-05-1973"
  },
  {
    "onderdeel": "hinkstapspringen",
    "naam": "Sanne Immer",
    "prestatie": "11.16 m (rw +0,0 m/s)",
    "plaats": "Sittard",
    "datum": "26-06-2004"
  },
  {
    "onderdeel": "kogelstoten",
    "naam": "Baltine de Wit",
    "prestatie": "10.79",
    "plaats": "Haarlem",
    "datum": "23-05-2001"
  },
  {
    "onderdeel": "discuswerpen",
    "naam": "Brenda Stoete",
    "prestatie": "23.26",
    "plaats": "Beverwijk",
    "datum": "27-05-1988"
  },
  {
    "onderdeel": "speerwerpen",
    "naam": "Ingeborg Zandbergen (B)",
    "prestatie": "31.10",
    "plaats": "Alphen aan den Rijn",
    "datum": "12-06-1994"
  },
  {
    "onderdeel": "kogelslingeren",
    "naam": "vacant",
    "prestatie": "",
    "plaats": "",
    "datum": ""
  },
  {
    "onderdeel": "4 x 100 meter",
    "naam": ["Aneska de Windt","Chantal Bruyn","Kivelly Grotendorst","Brenda Stoete"],
    "prestatie": "50,64 (50,5)",
    "plaats": "Lisse",
    "datum": "24-06-1990"
  },
  {
    "onderdeel": "4 x 400 meter",
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
        "onderdeel": "100 meter horden",
        "prestatie": "16,68",
        "punten": "(633)"
      },
      {
        "onderdeel": "hoogspringen",
        "prestatie": "1.54",
        "punten": "(666)"
      },
      {
        "onderdeel": "kogelstoten",
        "prestatie": "9.72",
        "punten": "(511)"
      },
      {
        "onderdeel": "200 meter",
        "prestatie": "26,31",
        "punten": "(770)"
      },
      {
        "onderdeel": "verspringen",
        "prestatie": "5.36",
        "punten": "(660)"
      },
      {
        "onderdeel": "speerwerpen",
        "prestatie": "26.99",
        "punten": "(420)"
      },
      {
        "onderdeel": "800 meter",
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
