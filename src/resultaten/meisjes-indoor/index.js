import juniorenA from './junioren-a';
import juniorenB from './junioren-b';
import juniorenC from './junioren-c';

export default []
  .concat(
    juniorenA,
    juniorenB,
    juniorenC
  )
  .map(resultaat => {
    resultaat.geslacht = 'Meisjes';
    resultaat.locatie = 'indoor';
    return resultaat;
  })
