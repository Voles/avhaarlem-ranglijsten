import senioren from './senioren';
import juniorenA from './junioren-a';
import juniorenB from './junioren-b';
import juniorenC from './junioren-c';
import juniorenD from './junioren-d';
import wegatletiek from './wegatletiek';

export default []
  .concat(
    senioren,
    juniorenA,
    juniorenB,
    juniorenC,
    juniorenD,
    wegatletiek
  )
  .map(resultaat => {
    resultaat.geslacht = 'Mannen';
    resultaat.locatie = 'outdoor';
    return resultaat;
  });
