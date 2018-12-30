import senioren from './senioren';
import juniorenA from './junioren-a';
import juniorenB from './junioren-b';
import juniorenC from './junioren-c';
import juniorenD from './junioren-d';

export default []
  .concat(
    senioren,
    juniorenA,
    juniorenB,
    juniorenC,
    juniorenD
  )
  .map(resultaat => {
    resultaat.geslacht = 'Vrouwen';
    resultaat.locatie = 'indoor';
    return resultaat;
  })
