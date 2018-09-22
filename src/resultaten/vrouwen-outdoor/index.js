import senioren from './senioren';
import juniorenA from './junioren-a';

export default []
  .concat(
    senioren,
    juniorenA
  )
  .map(resultaat => {
    resultaat.geslacht = 'Vrouwen';
    resultaat.locatie = 'outdoor';
    return resultaat;
  })
