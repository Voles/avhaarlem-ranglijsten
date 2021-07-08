import {notatieToCentimeter, centimeterToNotatie} from "./afstandsnotatie";

test.concurrent.each([
  ['16,98', 1698],
  ['4,86', 486],
  ['5.12', 512],
  ['1.51', 151],
  ['1.1', 110]
])('afstandsnotatie naar centimeters (%s is %i cm)', (afstandsnotatie, expected) => {
  expect(notatieToCentimeter(afstandsnotatie)).toBe(expected);
})

test.concurrent.each([
  [1698, '16,98'],
  [486, '4,86'],
  [512, '5,12'],
  [151, '1,51'],
  [110, '1,10']
])('centimeter naar afstandsnotatie (%i cm is %s)', (centimeter, expected) => {
  expect(centimeterToNotatie(centimeter)).toBe(expected);
})
