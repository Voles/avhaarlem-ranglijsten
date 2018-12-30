import {
  DERTIG_KILOMETER, EEN_UUR,
  HALVE_MARATHON, HONDERD_KILOMETER, MARATHON, TIEN_ENGELSE_MIJL,
  TIEN_KILOMETER,
  TWINTIG_KILOMETER, VIJFENDERTIG_KILOMETER,
  VIJFENTWINTIG_KILOMETER,
  VIJFTIEN_KILOMETER
} from '../../constants/onderdelen';

export default [
  {
    "onderdeel": TIEN_KILOMETER,
    "naam": "Marianne van de Linde",
    "prestatie": "33.49",
    "datum": "04-08-1993",
    "plaats": "Berkenrode"
  },
  {
    "onderdeel": VIJFTIEN_KILOMETER,
    "naam": "Marianne van de Linde",
    "prestatie": "52.29",
    "datum": "21-11-1993",
    "plaats": "Nijmegen"
  },
  {
    "onderdeel": VIJFTIEN_KILOMETER,
    "naam": "Marianne van de Linde",
    "prestatie": "",
    "datum": "01-05-1994",
    "plaats": "Breda"
  },
  {
    "onderdeel": TIEN_ENGELSE_MIJL,
    "naam": "Marianne van de Linde",
    "prestatie": "55.34",
    "datum": "1992",
    "plaats": "?"
  },
  {
    "onderdeel": TWINTIG_KILOMETER,
    "naam": "Marianne van de Linde",
    "prestatie": "1.12.03",
    "datum": "30-04-1991",
    "plaats": "Beverwijk"
  },
  {
    "onderdeel": HALVE_MARATHON,
    "naam": "Marianne van de Linde",
    "prestatie": "1.13.35",
    "datum": "04-10-1992",
    "plaats": "Breda"
  },
  {
    "onderdeel": VIJFENTWINTIG_KILOMETER,
    "naam": "Heidi van der Plas",
    "prestatie": "2.08.06",
    "datum": "23-02-1991",
    "plaats": "Aerdenhout"
  },
  {
    "onderdeel": DERTIG_KILOMETER,
    "naam": "Marianne van de Linde",
    "prestatie": "1.53.37",
    "datum": "20-03-1994",
    "plaats": "Spaarnwoude"
  },
  {
    "onderdeel": VIJFENDERTIG_KILOMETER,
    "naam": "vacant",
    "prestatie": "",
    "datum": "",
    "plaats": ""
  },
  {
    "onderdeel": MARATHON,
    "naam": "Marianne van de Linde",
    "prestatie": "2.41.52",
    "datum": "25-10-1992",
    "plaats": "Frankfurt (D)"
  },
  {
    "onderdeel": HONDERD_KILOMETER,
    "naam": "vacant",
    "prestatie": "",
    "datum": "",
    "plaats": ""
  },
  {
    "onderdeel": EEN_UUR,
    "naam": "vacant",
    "prestatie": "",
    "datum": "",
    "plaats": ""
  }
].map(resultaat => {
  resultaat.categorie = 'Lange afstand';
  return resultaat;
});
