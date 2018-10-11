import juniorenA from './junioren-a';

export default []
  .concat(
    juniorenA,
  )
  .map(resultaat => {
    resultaat.geslacht = 'Meisjes';
    resultaat.locatie = 'indoor';
    return resultaat;
  })
