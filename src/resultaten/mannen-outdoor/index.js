import senioren from './senioren';

export default []
  .concat(
    senioren
  )
  .map(resultaat => {
    resultaat.geslacht = 'Mannen';
    resultaat.locatie = 'outdoor';
    return resultaat;
  })
