import {
  DERTIG_KILOMETER, EEN_UUR,
  HALVE_MARATHON, HONDERD_KILOMETER, MARATHON,
  TIEN_ENGELSE_MIJL,
  TIEN_KILOMETER,
  TWINTIG_KILOMETER, VIJFENDERTIG_KILOMETER, VIJFENTWINTIG_KILOMETER,
  VIJFTIEN_KILOMETER
} from '../../constants/onderdelen';

export default [
  {
    "onderdeel": TIEN_KILOMETER,
    "naam": "Tom Wiggers",
    "prestatie": "29.05",
    "datum": "12-02-2012",
    "plaats": "Schoorl"
  },
  {
    "onderdeel": VIJFTIEN_KILOMETER,
    "naam": "Tom Wiggers",
    "prestatie": "44.42",
    "datum": "17-11-2013",
    "plaats": "Nijmegen"
  },
  {
    "onderdeel": TIEN_ENGELSE_MIJL,
    "naam": "Tom Wiggers",
    "prestatie": "47.24",
    "datum": "06-10-2013",
    "plaats": "Bergen"
  },
  {
    "onderdeel": TWINTIG_KILOMETER,
    "naam": "Kees van Dommele",
    "prestatie": "1.03.55",
    "datum": "30-04-1991",
    "plaats": "Beverwijk"
  },
  {
    "onderdeel": HALVE_MARATHON,
    "naam": "Tom Wiggers",
    "prestatie": "1.03,40",
    "datum": "13-01-2013",
    "plaats": "Egmond"
  },
  {
    "onderdeel": VIJFENTWINTIG_KILOMETER,
    "naam": "Kees van Dommele",
    "prestatie": "1.21.08",
    "datum": "23-09-1989",
    "plaats": "Zevenbergen"
  },
  {
    "onderdeel": DERTIG_KILOMETER,
    "naam": "Kees van Dommele",
    "prestatie": "1.42.42",
    "datum": "01-04-1990",
    "plaats": "Spaarnwoude"
  },
  {
    "onderdeel": VIJFENDERTIG_KILOMETER,
    "naam": "Krijn Kroezen",
    "prestatie": "2.23.13",
    "datum": "20-06-1964",
    "plaats": "Vught"
  },
  {
    "onderdeel": MARATHON,
    "naam": "Kees van Dommele",
    "prestatie": "2.25.02",
    "datum": "03-02-1990",
    "plaats": "Apeldoorn"
  },
  {
    "onderdeel": HONDERD_KILOMETER,
    "naam": "Wim Kluyskens",
    "prestatie": "7.39.53",
    "datum": "24-09-1977",
    "plaats": "Winschoten"
  },
  {
    "onderdeel": EEN_UUR,
    "naam": "Kees van Dommele",
    "prestatie": "18,262 km",
    "datum": "04-06-1990",
    "plaats": "Dordrecht"
  },
  {
    "onderdeel": "10×10 km",
    "naam": ["Daan", "Niels", "Viktor", "Frank", "Marco", "Boudewijn", "Adrie", "Cor", "Sander", "Gerlies"],
    "prestatie": "7.24.54",
    "datum": "10-09-2016",
    "plaats": "Winschoten"
  }
].map(resultaat => {
  resultaat.categorie = 'Lange afstand';
  return resultaat;
})
