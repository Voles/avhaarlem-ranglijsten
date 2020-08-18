const resultatenNaarTabellen = resultaten => {
  const hash = resultaten
    .reduce((accumulator, currentValue) => {
      const { categorie, locatie, geslacht } = currentValue;
      const key = `${categorie}-${geslacht}-${locatie}`;

      const titel = categorie.toLowerCase() === 'wegatletiek' ?
        `${geslacht} ${categorie}` :
        `${geslacht} ${categorie} ${locatie}`;

      accumulator[key] = accumulator[key] || {
        titel,
        geslacht: geslacht.toLowerCase(),
        categorie: categorie.toLowerCase().replace(' ', '-'),
        locatie: locatie.toLowerCase(),
        rijen: []
      };
      accumulator[key].rijen.push(currentValue);

      return accumulator;
    }, {});

  return Object
    .keys(hash)
    .map(key => hash[key]);
};

export default resultatenNaarTabellen
