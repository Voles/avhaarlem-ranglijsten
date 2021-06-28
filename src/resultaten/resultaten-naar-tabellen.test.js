import resultatenNaarTabellen, {tijdsnotatieNaarSeconden} from "./resultaten-naar-tabellen";

test('resultaten naar tabellen', () => {
  const resultaat = {
    "onderdeel": "1 000 m",
    "naam": "Stein Metten",
    "prestatie": "2.54,19",
    "plaats": "Gent (B)",
    "datum": "27-02-2005",
    "categorie": "Junioren A",
    "geslacht": "Mannen",
    "locatie": "indoor"
  }
  const result = resultatenNaarTabellen([resultaat])
  expect(result).toEqual([{
    titel: "Mannen Junioren A indoor",
    categorie: "junioren-a",
    geslacht: "mannen",
    locatie: "indoor",
    rijen: [{
      "onderdeel": "1 000 m",
      "naam": "Stein Metten",
      "prestatie": "2.54,19",
      "plaats": "Gent (B)",
      "datum": "27-02-2005",
      "categorie": "Junioren A",
      "geslacht": "Mannen",
      "locatie": "indoor"
    }]
  }])
})

test('laat alleen meest recente resultaat zien voor categorie, tenzij de prestatie gelijk is', () => {
  const resultaatA = {
    "onderdeel": "1 000 m",
    "naam": "Stein Metten",
    "prestatie": "1.54,19",
    "plaats": "Gent (B)",
    "datum": "27-02-2005",
    "categorie": "Junioren A",
    "geslacht": "Mannen",
    "locatie": "indoor"
  }
  const resultaatB = {
    "onderdeel": "1 000 m",
    "naam": "Stein Metten",
    "prestatie": "2.54,19",
    "plaats": "Gent (B)",
    "datum": "27-02-2006",
    "categorie": "Junioren A",
    "geslacht": "Mannen",
    "locatie": "indoor"
  }
  const resultaatC = {
    "onderdeel": "1 000 m",
    "naam": "Stein Metten",
    "prestatie": "2.54,19",
    "plaats": "Gent (B)",
    "datum": "27-02-2007",
    "categorie": "Junioren A",
    "geslacht": "Mannen",
    "locatie": "indoor"
  }

  const result = resultatenNaarTabellen([resultaatA, resultaatB, resultaatC])
  expect(result).toEqual([{
    titel: "Mannen Junioren A indoor",
    categorie: "junioren-a",
    geslacht: "mannen",
    locatie: "indoor",
    rijen: [resultaatB, resultaatC]
  }])
})

test.concurrent.each([
  ['2.54,19', 174.19],
  ['3.51,0', 231],
  ['2.25.02', 8702]
])('tijdsnotatie naar seconden (%s is %i seconden)', (tijdsnotatie, expected) => {
  expect(tijdsnotatieNaarSeconden(tijdsnotatie)).toBe(expected);
})
