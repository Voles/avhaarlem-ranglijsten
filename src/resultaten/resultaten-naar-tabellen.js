import {ACHTKAMP, NEGENKAMP, TIENKAMP, VIJFKAMP, ZESKAMP, ZEVENKAMP} from "../constants/onderdelen";

const opOnderdeel = (a, b) =>
  (onderdelen.indexOf(a.onderdeel) + 1) - (onderdelen.indexOf(b.onderdeel) + 1)

const resultatenNaarTabellen = resultaten => {
  resultaten.sort(opOnderdeel)

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

    const tabellen = Object
      .keys(hash)
      .map(key => hash[key]);

    return tabellen
      .map(tabel => {
          tabel.rijen = filterMeestRecentePrestatiesEnEvenaringen(tabel.rijen)
          return tabel
      })
};

// we willen alleen het meest recente record laten zien.
// tenzij het record een evenaring is van een vorig record, dan willen
// we beiden laten zien
const filterMeestRecentePrestatiesEnEvenaringen = (rijen) => {
    const rijenPerOnderdeel = rijen.reduce((acc, currentValue) => {
        const key = currentValue.onderdeel
        acc[key] = acc[key] || []
        acc[key].push(currentValue)
        return acc
    }, {})

    return rijen.filter(rij => {
        const aantalRijenVoorOnderdeel = rijenPerOnderdeel[rij.onderdeel].length

        if (aantalRijenVoorOnderdeel <= 1) {
            return true
        }

        const rijenVoorOnderdeel = rijenPerOnderdeel[rij.onderdeel]

        // sorteer rijen per onderdeel op datum
        rijenVoorOnderdeel.sort((a, b) => {
            return stringDatumNaarDatumObject(a.datum) - stringDatumNaarDatumObject(b.datum)
        })

        const meestRecentePrestatie = rijenVoorOnderdeel[rijenVoorOnderdeel.length - 1]

        if (meestRecentePrestatie.datum === rij.datum) {
            return true
        }

        if (meestRecentePrestatie.prestatie === rij.prestatie) {
            return true
        }
    })
}

const stringDatumNaarDatumObject = (stringDatum) => {
    const parts = stringDatum.split('-')
    return Date.parse(`${parts[2]}-${parts[1]}-${parts[0]}`)
}

export default resultatenNaarTabellen

export const GROOTHEID_TIJD = 'tijd'
export const GROOTHEID_AFSTAND = 'afstand'

export const onderdeelToGrootheid = (onderdeel) => {
    switch (onderdeel) {
        case "30 m":
        case "35 m":
        case "40 m":
        case "50 m":
        case "50 m h.t.":
        case "60 m":
        case "80 m":
        case "100 m":
        case "150 m":
        case "200 m":
        case "300 m":
        case "400 m":
        case "600 m":
        case "800 m":
        case "1 000 m":
        case "1 500 m":
        case "1 Engelse mijl":
        case "10 Engelse mijl":
        case "2 000 m":
        case "3 000 m":
        case "5 000 m":
        case "10 km":
        case "15 km":
        case "20 km":
        case "Halve marathon":
        case "25 km":
        case "30 km":
        case "35 km":
        case "Marathon":
        case "100 km":
        case "40 m horden":
        case "60 m horden":
        case "80 m horden":
        case "100 m horden":
        case "100 m horden (84 cm)*":
        case "100 m horden (91,4 cm)*":
        case "110 m horden":
        case "300 m horden":
        case "400 m horden":
        case "4 x 60 m":
        case "4 x 80 m":
        case "4 x 100 m":
        case "4 x 100 m h.t.":
        case "4 x 200 m":
        case "4 x 400 m":
        case "4 x 800 m":
        case "4 x 1500 m":
        case "Zweedse estafette":
        case "3 km snelwandelen":
        case "5 km snelwandelen":
        case "10 km snelwandelen":
        case "20 km snelwandelen":
        case "30 km snelwandelen":
        case "50 km snelwandelen":
        case "1 500 m steeplechase":
        case "2 000 m steeplechase":
        case "3 000 m steeplechase":
        case "1 uur":
          return GROOTHEID_TIJD

        case "Balwerpen":
        case "Hoogspringen":
        case "Verspringen":
        case "Gewichtwerpen":
        case "Kogelstoten":
        case "Kogelslingeren":
        case "Polsstokhoogspringen":
        case "Hinkstapspringen":
        case "Discuswerpen":
        case "Speerwerpen":
        case "10 x 10 km":
            return GROOTHEID_AFSTAND

        case VIJFKAMP:
        case ZESKAMP:
        case ZEVENKAMP:
        case ACHTKAMP:
        case NEGENKAMP:
        case TIENKAMP:
          throw new Error(`unable to determine grootheid for onderdeel '${onderdeel}'`)
    }
}

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
    "10 Engelse mijl",
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
