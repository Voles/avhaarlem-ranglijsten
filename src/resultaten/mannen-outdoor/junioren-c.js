export default [
  {
    "onderdeel": "100 meter",
    "naam": "Kan Dinkla",
    "prestatie": "11,76 s (rw +1,4 m/s)",
    "plaats": "Emmeloord",
    "datum": "25-09-2004"
  },
  {
    "onderdeel": "800 meter",
    "naam": "Vincent van der Lans",
    "prestatie": "2.05,5 s",
    "plaats": "Haarlem",
    "datum": "18-09-1996"
  },
  {
    "onderdeel": "1000 meter",
    "naam": "Vincent van der Lans",
    "prestatie": "2.47,2 s",
    "plaats": "Haarlem",
    "datum": "06-10-1996"
  },
  {
    "onderdeel": "1500 meter",
    "naam": "Walter Salzmann",
    "prestatie": "4.29,7 s",
    "plaats": "Amsterdam",
    "datum": "02-09-1973"
  },
  {
    "onderdeel": "100 meter horden (84 cm)*",
    "naam": "Kan Dinkla",
    "prestatie": "14,43 s (rw +0,3 m/s)",
    "plaats": "Emmeloord",
    "datum": "26-09-2004"
  },
  {
    "onderdeel": "100 meter horden (91,4 cm)*",
    "naam": "Chris van der Werff",
    "prestatie": "15,14 s (14,9)",
    "plaats": "Heerhugowaard",
    "datum": "17-08-1985"
  },
  {
    "onderdeel": "300 meter horden",
    "naam": "Chris van der Werff",
    "prestatie": "41,74 s (41,5)",
    "plaats": "Amsterdam",
    "datum": "25-08-1985"
  },
  {
    "onderdeel": "hoogspringen",
    "naam": "Niels Pijnaker",
    "prestatie": "1,80 m",
    "plaats": "Krommenie",
    "datum": "04-09-2004"
  },
  {
    "onderdeel": "polsstokhoogspringen",
    "naam": "Olivier Barreveld",
    "prestatie": "3,10 m",
    "plaats": "Hoorn",
    "datum": "19-09-1992"
  },
  {
    "onderdeel": "verspringen",
    "naam": "Eldridge Isselt",
    "prestatie": "6,34 m",
    "plaats": "Amsterdam",
    "datum": "25-08-1991"
  },
  {
    "onderdeel": "kogelstoten",
    "naam": "Eric Noom",
    "prestatie": "14,11 m",
    "plaats": "Amsterdam",
    "datum": "28-08-1983"
  },
  {
    "onderdeel": "discuswerpen",
    "naam": "Dennis Kruithof",
    "prestatie": "46,50 m",
    "plaats": "Haarlem",
    "datum": "21-06-1980"
  },
  {
    "onderdeel": "speerwerpen",
    "naam": "Dennis Kruithof",
    "prestatie": "50,76 m",
    "plaats": "Haarlem",
    "datum": "23-08-1980"
  },
  {
    "onderdeel": "4 x 100 meter",
    "naam": ["Patrick Been","Marvin Isselt","Edward Leter","Tony v/d Prijt"],
    "prestatie": "47,54 s (47,4)",
    "plaats": "Beverwijk",
    "datum": "14-06-1986"
  },
  {
    "onderdeel":"4 x 100 meter",
    "naam": ["Patrick Been","Stefan van Keulen","Martijn te Velden","Ricardo Wielingen"],
    "prestatie": "",
    "plaats": "Beverwijk",
    "datum": "13-06-1987"
  },
  {
    "onderdeel": "achtkamp",
    "naam": "Alex Overkamp",
    "plaats": "Schoonhoven",
    "datum": "1/2-7-2006",
    "prestatie": [
      {
        "onderdeel": "100 meter",
        "prestatie": "12,44 s (12,2)",
        "punten": "(753)"
      },
      {
        "onderdeel": "verspringen",
        "prestatie": "5,68 m",
        "punten": "(751)"
      },
      {
        "onderdeel": "kogelstoten",
        "prestatie": "10,84 m",
        "punten": "(562)"
      },
      {
        "onderdeel": "hoogspringen",
        "prestatie": "1,65 m",
        "punten": "(741)"
      },
      {
        "onderdeel": "100 meter horden",
        "prestatie": "15,14 s (14,9)",
        "punten": "(712)"
      },
      {
        "onderdeel": "discuswerpen",
        "prestatie": "32,03 m",
        "punten": "(505)"
      },
      {
        "onderdeel": "speerwerpen",
        "prestatie": "39,94 m",
        "punten": "(639)"
      },
      {
        "onderdeel": "1000 m",
        "prestatie": "3.00,9",
        "punten": "(692)"
      },
      {
        "onderdeel": "Totaal",
        "prestatie": "",
        "punten": "5355 pnt"
      }
    ]
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren C';
  return resultaat;
});
