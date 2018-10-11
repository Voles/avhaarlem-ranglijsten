export default [
  {
    "onderdeel": "50 meter h.t.",
    "naam": "Marjanne van Sambeek (B)",
    "prestatie": "7,04 (6,8)",
    "plaats": "Amsterdam",
    "datum": "05-02-1995"
  },
  {
    "onderdeel": "60 meter",
    "naam": "Anja Smits",
    "prestatie": "8,24 (8,0)",
    "plaats": "Leiden",
    "datum": "24-02-1973"
  },
  {
    "onderdeel": "400 meter",
    "naam": "Chantal Bruijn",
    "prestatie": "62,75",
    "plaats": "Den Haag",
    "datum": "16-02-1991"
  },
  {
    "onderdeel": "800 meter",
    "naam": "Jirina van Kesteren",
    "prestatie": "2.32,41",
    "plaats": "Zuidbroek",
    "datum": "25-01-2004"
  },
  {
    "onderdeel": "1500 meter",
    "naam": "Larissa Scholten",
    "prestatie": "5.16,60",
    "plaats": "Groningen",
    "datum": "28-01-2007"
  },
  {
    "onderdeel": "50 meter horden",
    "naam": "Jirina van Kesteren",
    "prestatie": "9,07",
    "plaats": "Alkmaar",
    "datum": "11-12-2004"
  },
  {
    "onderdeel": "60 meter horden",
    "naam": "Anja Smits",
    "prestatie": "9,34 (9,1)",
    "plaats": "Leiden",
    "datum": "24-02-1973"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": "Tara van Schie",
    "prestatie": "1,56",
    "plaats": "Gent (B)",
    "datum": "03-02-2008"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Anja Smits",
    "prestatie": "5,56",
    "plaats": "Leiden",
    "datum": "10-02-1973"
  },
  {
    "onderdeel": "kogelstoten",
    "naam": "Wendy IJzerman",
    "prestatie": "11,20",
    "plaats": "Den Haag",
    "datum": "26-01-1997"
  },
  {
    "onderdeel": "vijfkamp",
    "naam": "Tara van Schie",
    "plaats": "Gent (B)",
    "datum": "03-02-2008",
    "prestatie": [
      {
        "onderdeel": "60 meter horden",
        "prestatie": "9,72",
        "punten": "(756)"
      },
      {
        "onderdeel": "hoogspringen",
        "prestatie": "1,56",
        "punten": "(689)"
      },
      {
        "onderdeel": "kogelstoten",
        "prestatie": "9,72",
        "punten": "(511)"
      },
      {
        "onderdeel": "verspringen",
        "prestatie": "5,38",
        "punten": "(665)"
      },
      {
        "onderdeel": "800 meter",
        "prestatie": "3.07,09",
        "punten": "(302)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "2932"
      }
    ]
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren A';
  return resultaat;
})
