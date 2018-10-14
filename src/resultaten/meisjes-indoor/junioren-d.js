export default [
  {
    "onderdeel": "50 meter",
    "naam": "Marjanne van Sambeek",
    "prestatie": "7,24 (7,0)",
    "plaats": "Utrecht",
    "datum": "29-02-1992"
  },
  {
    "onderdeel": "60 meter",
    "naam": "Marjanne van Sambeek",
    "prestatie": "8,64",
    "plaats": "Den Haag",
    "datum": "10-03-1991"
  },
  {
    "onderdeel": "600 meter",
    "naam": "Marjan Witteman",
    "prestatie": "1.50,1",
    "plaats": "Den Haag",
    "datum": "21-01-1990"
  },
  {
    "onderdeel": "1000 meter",
    "naam": "Joanna Andrews",
    "prestatie": "3.34,3",
    "plaats": "Den Haag",
    "datum": "18-03-1990"
  },
  {
    "onderdeel": "50 meter horden",
    "naam": "Joanna Andrews",
    "prestatie": "8,84 (8,6)",
    "plaats": "Utrecht",
    "datum": "23-02-1992"
  },
  {
    "onderdeel": "60 meter horden",
    "naam": "Baltine de Wit",
    "prestatie": "9,60",
    "plaats": "Den Haag",
    "datum": "06-03-1994"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": "Joanna Andrews",
    "prestatie": "1,45",
    "plaats": "Zaandam",
    "datum": "15-02-1992"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Babs Koeman",
    "prestatie": "4,67",
    "plaats": "Zoetermeer",
    "datum": "17-12-2016"
  },
  {
    "onderdeel": "kogelstoten",
    "naam": "Sanna Piscaer",
    "prestatie": "10,45",
    "plaats": "Den Haag",
    "datum": "06-03-1994"
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren D';
  return resultaat;
})
