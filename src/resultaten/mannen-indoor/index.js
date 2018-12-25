import senioren from './senioren';
// import juniorenA from './junioren-a';
// import juniorenB from './junioren-b';
// import juniorenC from './junioren-c';
// import juniorenD from './junioren-d';
// import langeAfstand from './lange-afstand';

export default []
  .concat(
    senioren,
    // juniorenA,
    // juniorenB,
    // juniorenC,
    // juniorenD,
    // langeAfstand
  )
  .map(resultaat => {
    resultaat.geslacht = 'Mannen';
    resultaat.locatie = 'indoor';
    return resultaat;
  });
