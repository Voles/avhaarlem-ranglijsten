export default [
  {
    "onderdeel": "35 meter",
    "naam": "Tymo Bouman",
    "prestatie": "5,5",
    "plaats": "Epe",
    "datum": "12-03-2017"
  },
  {
    "onderdeel": "40 meter",
    "naam": "Tymo Bouman",
    "prestatie": "6,2",
    "plaats": "Doetichem",
    "datum": "25-02-2018"
  },
  {
    "onderdeel": "50 meter",
    "naam": "Tymo Bouman",
    "prestatie": "7,49",
    "plaats": "Heerenveen",
    "datum": "17-03-2018"
  },
  {
    "onderdeel": "60 meter",
    "naam": "Ivo van Kempen",
    "prestatie": "8,51",
    "plaats": "Den Haag",
    "datum": "05-03-1995"
  },
  {
    "onderdeel": "600 meter",
    "naam": "Vincent van der Lans",
    "prestatie": "1.49,0",
    "plaats": "Den Haag",
    "datum": "29-11-1992"
  },
  {
    "onderdeel": "1000 meter",
    "naam": "Peter Markwat",
    "prestatie": "3.22,4",
    "plaats": "Den Haag",
    "datum": "25-11-1990"
  },
  {
    "onderdeel": "40 meter horden",
    "naam": "Tymo Bouman",
    "prestatie": "7,3",
    "plaats": "Doetichem",
    "datum": "25-02-2018"
  },
  {
    "onderdeel": "50 meter horden",
    "naam": "Pim Pauel",
    "prestatie": "9,64 (9,4)",
    "plaats": "Amsterdam",
    "datum": "20-11-2010"
  },
  {
    "onderdeel": "60 meter horden",
    "naam": "Derk Hoefman",
    "prestatie": "10,30",
    "plaats": "Enschede",
    "datum": "28-10-2018"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": ["Erick Könst", "Tymo Bouman"],
    "prestatie": "1,40",
    "plaats": "Dongen / Uden",
    "datum": "17-01-2016 / 16-12-2017"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Pim Pauel",
    "prestatie": "4,52",
    "plaats": "Amsterdam",
    "datum": "20-11-2010"
  },
  {
    "onderdeel": "kogelstoten",
    "naam": "Erick Konst",
    "prestatie": "10,50",
    "plaats": "Bergen op Zoom",
    "datum": "29-10-2016"
  }
]
  .map(resultaat => {
  resultaat.categorie = 'Junioren D';
  return resultaat;
});
