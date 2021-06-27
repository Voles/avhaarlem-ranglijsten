
const perOnderdeel = (a, b) =>
  (onderdelen.indexOf(a.onderdeel) + 1) - (onderdelen.indexOf(b.onderdeel) + 1)

const resultatenNaarTabellen = resultaten => {
  resultaten.sort(perOnderdeel)

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

const onderdelen = [
    "30 m",
    "35 m",
    "40 m",
    "50 m",
    "50 m h.t.",
    "60 m",
    "80 m",
    "100 m",
    "150 m",
    "200 m",
    "300 m",
    "400 m",
    "600 m",
    "800 m",
    "1 000 m",
    "1 500 m",
    "1 Engelse mijl",
    "10 km",
    "15 km",
    "10 Engelse mijl",
    "20 km",
    "2 000 m",
    "3 000 m",
    "5 000 m",
    "10 km",
    "15 km",
    "20 km",
    "Halve marathon",
    "25 km",
    "30 km",
    "35 km",
    "Marathon",
    "100 km",
    "40 m horden",
    "60 m horden",
    "60 m horden",
    "80 m horden",
    "100 m horden",
    "100 m horden (84 cm)*",
    "100 m horden (91,4 cm)*",
    "110 m horden",
    "300 m horden",
    "400 m horden",
    "4 x 60 m",
    "4 x 80 m",
    "4 x 100 m",
    "4 x 100 m h.t.",
    "4 x 200 m",
    "4 x 400 m",
    "4 x 800 m",
    "4 x 1500 m",
    "Zweedse estafette",
    "3 km snelwandelen",
    "5 km snelwandelen",
    "10 km snelwandelen",
    "20 km snelwandelen",
    "30 km snelwandelen",
    "50 km snelwandelen",
    "1 500 m steeplechase",
    "2 000 m steeplechase",
    "3 000 m steeplechase",
    "1 uur",
    "Balwerpen",
    "Hoogspringen",
    "Verspringen",
    "Gewichtwerpen",
    "Kogelstoten",
    "Kogelslingeren",
    "Polsstokhoogspringen",
    "Hinkstapspringen",
    "Discuswerpen",
    "Speerwerpen",
    "Vijfkamp",
    "Zeskamp",
    "Zevenkamp",
    "Achtkamp",
    "Negenkamp",
    "Tienkamp",
    "10 x 10 km",
]
