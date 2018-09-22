export const laatsteWijzigingGemaaktOp = new Date(2018, 9, 22);

export default [{
  onderdeel: '100m',
  categorie: 'Senioren',
  locatie: 'outdoor',
  geslacht: 'Vrouwen',
  naam: 'Niels',
  prestatie: '',
  plaats: '',
  datum: new Date(2018, 9, 22)
}, {
  onderdeel: '100m',
  categorie: 'Senioren',
  locatie: 'outdoor',
  geslacht: 'Vrouwen',
  naam: '',
  prestatie: [{
    onderdeel: '100 meter horden',
    prestatie: '16,69',
    punten: '633'
  }, {
    onderdeel: 'hoogspringen',
    prestatie: '1,54',
    punten: '666'
  }],
  plaats: '',
  datum: new Date(2018, 9, 22)
}, {
  onderdeel: '100m',
  categorie: 'Senioren',
  locatie: 'outdoor',
  geslacht: 'Vrouwen',
  naam: ['Bente Elgersma', 'Sabine Hannema', 'Mirthe Wiltink', 'Albertine Vermeer'],
  prestatie: '',
  plaats: '',
  datum: new Date(2018, 9, 22)
}];

export const resultatenNaarTabellen = resultaten => {
  const hash = resultaten
    .reduce((accumulator, currentValue) => {
      const { categorie, locatie, geslacht } = currentValue;
      const key = `${categorie}-${geslacht}-${locatie}`;
      const titel = `${categorie} ${geslacht} ${locatie}`;

      accumulator[key] = accumulator[key] || { titel , rijen: []};
      accumulator[key].rijen.push(currentValue);

      return accumulator;
    }, {});

  return Object
    .keys(hash)
    .map(key => hash[key]);
}
