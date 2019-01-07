import {
  ACHTHONDERD_METER, ACHTKAMP, DISCUSWERPEN, DRIEHONDERD_METER_HORDEN,
  DUIZEND_METER,
  DUIZENDVIJFHONDERD_METER,
  HONDERD_METER, HONDERD_METER_HORDEN,
  HOOGSPRINGEN, KOGELSTOTEN, POLSSTOKHOOGSPRINGEN, SPEERWERPEN, VERSPRINGEN, VIER_KEER_HONDERD_METER
} from '../../constants/onderdelen';

export default [
  {
    "onderdeel": HONDERD_METER,
    "naam": "Kan Dinkla",
    "prestatie": "11,76 s (rw +1,4 m/s)",
    "plaats": "Emmeloord",
    "datum": "25-09-2004"
  },
  {
    "onderdeel": ACHTHONDERD_METER,
    "naam": "Vincent van der Lans",
    "prestatie": "2.05,5 s",
    "plaats": "Haarlem",
    "datum": "18-09-1996"
  },
  {
    "onderdeel": DUIZEND_METER,
    "naam": "Vincent van der Lans",
    "prestatie": "2.47,2 s",
    "plaats": "Haarlem",
    "datum": "06-10-1996"
  },
  {
    "onderdeel": DUIZENDVIJFHONDERD_METER,
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
    "onderdeel": DRIEHONDERD_METER_HORDEN,
    "naam": "Chris van der Werff",
    "prestatie": "41,74 s (41,5)",
    "plaats": "Amsterdam",
    "datum": "25-08-1985"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Niels Pijnaker",
    "prestatie": "1,80 m",
    "plaats": "Krommenie",
    "datum": "04-09-2004"
  },
  {
    "onderdeel": POLSSTOKHOOGSPRINGEN,
    "naam": "Olivier Barreveld",
    "prestatie": "3,10 m",
    "plaats": "Hoorn",
    "datum": "19-09-1992"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Eldridge Isselt",
    "prestatie": "6,34 m",
    "plaats": "Amsterdam",
    "datum": "25-08-1991"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Eric Noom",
    "prestatie": "14,11 m",
    "plaats": "Amsterdam",
    "datum": "28-08-1983"
  },
  {
    "onderdeel": DISCUSWERPEN,
    "naam": "Dennis Kruithof",
    "prestatie": "46,50 m",
    "plaats": "Haarlem",
    "datum": "21-06-1980"
  },
  {
    "onderdeel": SPEERWERPEN,
    "naam": "Dennis Kruithof",
    "prestatie": "50,76 m",
    "plaats": "Haarlem",
    "datum": "23-08-1980"
  },
  {
    "onderdeel": VIER_KEER_HONDERD_METER,
    "naam": ["Patrick Been","Marvin Isselt","Edward Leter","Tony v/d Prijt"],
    "prestatie": "47,54 s (47,4)",
    "plaats": "Beverwijk",
    "datum": "14-06-1986"
  },
  {
    "onderdeel": VIER_KEER_HONDERD_METER,
    "naam": ["Patrick Been","Stefan van Keulen","Martijn te Velden","Ricardo Wielingen"],
    "prestatie": "",
    "plaats": "Beverwijk",
    "datum": "13-06-1987"
  },
  {
    "onderdeel": ACHTKAMP,
    "naam": "Alex Overkamp",
    "plaats": "Schoonhoven",
    "datum": "1/2-7-2006",
    "prestatie": [
      {
        "onderdeel": HONDERD_METER,
        "prestatie": "12,44",
        "punten": "(753)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "5,68",
        "punten": "(751)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "10,84",
        "punten": "(562)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1,65",
        "punten": "(741)"
      },
      {
        "onderdeel": HONDERD_METER_HORDEN,
        "prestatie": "15,14",
        "punten": "(712)"
      },
      {
        "onderdeel": DISCUSWERPEN,
        "prestatie": "32,03",
        "punten": "(505)"
      },
      {
        "onderdeel": SPEERWERPEN,
        "prestatie": "39,94",
        "punten": "(639)"
      },
      {
        "onderdeel": DUIZEND_METER,
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
