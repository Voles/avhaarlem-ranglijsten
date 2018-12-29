import {
  DISCUSWERPEN,
  DRIEDUIZEND_METER,
  DUIZEND_METER,
  HOOGSPRINGEN, KOGELSTOTEN, SPEERWERPEN,
  VERSPRINGEN,
  VIJFDUIZEND_METER
} from '../../constants/onderdelen';

export default [
  {
    "onderdeel": "80 meter",
    "naam": "Michael Parkinson",
    "prestatie": "10,44 s (10,2)",
    "plaats": "Haarlem",
    "datum": "06-08-1988"
  },
  {
    "onderdeel": DUIZEND_METER,
    "naam": "Peter Markwat",
    "prestatie": "3.04,3 s",
    "plaats": "Haarlem",
    "datum": "06-10-1991"
  },
  {
    "onderdeel": DRIEDUIZEND_METER,
    "naam": "Ryan Eelman",
    "prestatie": "12:23,00",
    "plaats": "Haarlem",
    "datum": "20-09-2018"
  },
  {
    "onderdeel": VIJFDUIZEND_METER,
    "naam": "Derk Hoefman",
    "prestatie": "21:09,70",
    "plaats": "Haarlem",
    "datum": "20-09-2018"
  },
  {
    "onderdeel": "80 meter horden",
    "naam": "Derk Hoefman",
    "prestatie": "13,13 s",
    "plaats": "Leiden",
    "datum": "19-09-2018"
  },
  {
    "onderdeel": HOOGSPRINGEN,
    "naam": "Marvin Isselt",
    "prestatie": "1,60 m",
    "plaats": "Amstelveen",
    "datum": "02-06-1984"
  },
  {
    "onderdeel": VERSPRINGEN,
    "naam": "Edward Leter",
    "prestatie": "5,40 m",
    "plaats": "Beverwijk",
    "datum": "01-09-1984"
  },
  {
    "onderdeel": KOGELSTOTEN,
    "naam": "Dennis Kruithof",
    "prestatie": "12,30 m",
    "plaats": "Zaandam",
    "datum": "20-05-1978"
  },
  {
    "onderdeel": DISCUSWERPEN,
    "naam": "Dennis Kruithof",
    "prestatie": "35,32 m",
    "plaats": "Haarlem",
    "datum": "01-07-1978"
  },
  {
    "onderdeel": SPEERWERPEN,
    "naam": "Thomas Wouterse",
    "prestatie": "42,00 m",
    "plaats": "Alkmaar",
    "datum": "12-05-2001"
  },
  {
    "onderdeel": "balwerpen",
    "naam": "Dennis Kruithof",
    "prestatie": "60 m",
    "plaats": "Haarlem",
    "datum": "13-10-1977"
  },
  {
    "onderdeel": "4×80 meter",
    "naam": [ "Tymo Bouman", "Chivaro Friendwijk", "Derk Hoefman", "Sven Koolmoes" ],
    "prestatie": "41,12 s",
    "plaats": "Amsterdam",
    "datum": "30-06-2018"
  },
  {
    "onderdeel": "zevenkamp",
    "naam": "Pim Pauel",
    "plaats": "Schoonhoven",
    "datum": "02/03-07-2011",
    "prestatie": [
      {
        "onderdeel": "80 meter",
        "prestatie": "11,14 s (10,9)",
        "punten": "(596)"
      },
      {
        "onderdeel": VERSPRINGEN,
        "prestatie": "4,70 m",
        "punten": "(560)"
      },
      {
        "onderdeel": KOGELSTOTEN,
        "prestatie": "9,82 m",
        "punten": "(514)"
      },
      {
        "onderdeel": "80 meter horden",
        "prestatie": "14,24 s (14,0)",
        "punten": "(466)"
      },
      {
        "onderdeel": HOOGSPRINGEN,
        "prestatie": "1,45 m",
        "punten": "(582)"
      },
      {
        "onderdeel": SPEERWERPEN,
        "prestatie": "32,18 m",
        "punten": "(529)"
      },
      {
        "onderdeel": DUIZEND_METER,
        "prestatie": "3.18,8 s",
        "punten": "(554)"
      },
      {
        "onderdeel": "80 meter",
        "prestatie": "11,14 s (10,9)",
        "punten": "(596)"
      }
    ]
  }
].map(resultaat => {
  resultaat.categorie = 'Junioren D';
  return resultaat;
});
