import {isoToSeconds, secondsToIso} from "./tijdsnotatie";

test.concurrent.each([
  ['2.54,19', 174.19],
  ['3.51,0', 231],
  ['2.25.02', 8702]
])('ISO-notatie naar seconden (%s is %i seconden)', (tijdsnotatie, expected) => {
  expect(isoToSeconds(tijdsnotatie)).toBe(expected);
})

test.concurrent.each([
  [.25, '00,25'],
  [12.75, '12,75'],
  [174.19, '02.54,19'],
  [231, '03.51,00'],
  [8702, '02.25.02,00']
])('seconden naar ISO-notatie (%i seconden is %s)', (seconden, expected) => {
  expect(secondsToIso(seconden)).toBe(expected);
})
