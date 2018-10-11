import senioren from './senioren';

export default []
  .concat(
    senioren
  )
  .map(resultaat => {
    resultaat.geslacht = 'Vrouwen';
    resultaat.locatie = 'indoor';
    return resultaat;
  })
