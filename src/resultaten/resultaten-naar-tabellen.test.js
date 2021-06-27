import resultatenNaarTabellen from "./resultaten-naar-tabellen";

test('resultaten naar tabellen', () => {
  const resultaat = {
    "onderdeel": "1 000 m",
    "naam": "Stein Metten",
    "prestatie": {
      "code": "\"2.54,19\""
    },
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
      "prestatie": {
        "code": "\"2.54,19\""
      },
      "plaats": "Gent (B)",
      "datum": "27-02-2005",
      "categorie": "Junioren A",
      "geslacht": "Mannen",
      "locatie": "indoor"
    }]
  }])
})
