import senioren from './senioren';
import juniorenA from './junioren-a';
import juniorenB from './junioren-b';

export default []
  .concat(
    senioren,
    juniorenA,
    juniorenB
  )
  .map(resultaat => {
    resultaat.geslacht = 'Mannen';
    resultaat.locatie = 'outdoor';
    return resultaat;
  })
