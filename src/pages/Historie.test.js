import {sorteerOpDatumEnPrestatie} from "./Historie";
import {enhanceRawResultaat} from "../resultaten";

test('sorteer op datum en prestatie', () => {
  const resultaatA = {
    naam: "Alpha",
    datum: "01-01-2021",
    onderdeel: "200 m",
    prestatie: {
      code: "\"25,25\""
    }
  }

  const resultaatB = {
    naam: "Beta",
    datum: "01-01-2021",
    onderdeel: "200 m",
    prestatie: {
      code: "\"25,05\""
    }
  }

  const resultaatC = {
    naam: "Celcius",
    datum: "01-01-2020",
    onderdeel: "200 m",
    prestatie: {
      code: "\"28\""
    }
  }

  const input = [enhanceRawResultaat(resultaatA), enhanceRawResultaat(resultaatB), enhanceRawResultaat(resultaatC)]
  expect(
    sorteerOpDatumEnPrestatie(input).map(r => r.naam)
  ).toEqual(
    ["Celcius", "Alpha", "Beta"]
  )
})