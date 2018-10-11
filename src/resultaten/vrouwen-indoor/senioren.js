export default [
  {
    "onderdeel": "50 meter",
    "naam": "Marjanne van Sambeek",
    "prestatie": "7,04 (6,8)",
    "plaats": "Amsterdam",
    "datum": "05-02-1995"
  },
  {
    "onderdeel": "60 meter",
    "naam": "Brenda Stoete",
    "prestatie": "7,99",
    "plaats": "Den Haag",
    "datum": "26-01-1992"
  },
  {
    "onderdeel": "200 meter",
    "naam": "Brenda Stoete",
    "prestatie": "26,61",
    "plaats": "Den Haag",
    "datum": "13-01-1991"
  },
  {
    "onderdeel": "400 meter",
    "naam": "Kristel van Es",
    "prestatie": "61,66",
    "plaats": "Apeldoorn",
    "datum": "13-02-2010"
  },
  {
    "onderdeel": "800 meter",
    "naam": "Jirina van Kesteren",
    "prestatie": "2.32,41",
    "plaats": "Zuidbroek",
    "datum": "25-01-2004"
  },
  {
    "onderdeel": "3000 meter",
    "naam": "Marianne van de Linde",
    "prestatie": "9.32,21",
    "plaats": "Den Haag",
    "datum": "16-02-1992"
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
    "naam": "Mieke van der Kolk",
    "prestatie": "6,16",
    "plaats": "Zwolle",
    "datum": "22-01-1994"
  },
  {
    "onderdeel": "hinkstapspringen",
    "naam": "Mieke van der Kolk",
    "prestatie": "12,10",
    "plaats": "Den Haag",
    "datum": "20-02-1994"
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
  resultaat.categorie = 'Senioren';
  return resultaat;
})
