import senioren from './senioren';
import juniorenA from './junioren-a';
import juniorenB from './junioren-b';
import juniorenC from './junioren-c';

export default []
  .concat(
    senioren,
    juniorenA,
    juniorenB,
    juniorenC
  )
  .map(resultaat => {
    resultaat.geslacht = 'Vrouwen';
    resultaat.locatie = 'outdoor';
    return resultaat;
  })
