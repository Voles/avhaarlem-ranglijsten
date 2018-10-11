import juniorenA from './junioren-a';
import juniorenB from './junioren-b';

export default []
  .concat(
    juniorenA,
    juniorenB
  )
  .map(resultaat => {
    resultaat.geslacht = 'Meisjes';
    resultaat.locatie = 'indoor';
    return resultaat;
  })
