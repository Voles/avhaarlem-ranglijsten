// via https://electrictoolbox.com/pad-number-zeroes-javascript/
export const pad = (number, length) => {
  var str = '' + number;
  while (str.length < length) {
    str = '0' + str;
  }

  return str;
}
