import juniorenA from './junioren-a';
import juniorenB from './junioren-b';
import juniorenC from './junioren-c';
import juniorenD from './junioren-d';

export default []
  .concat(
    juniorenA,
    juniorenB,
    juniorenC,
    juniorenD,
  )
  .map(resultaat => {
    resultaat.geslacht = 'Meisjes';
    resultaat.locatie = 'outdoor';
    return resultaat;
  })
