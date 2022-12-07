/**
 *
 * @param {number[]} a
 * @return {number}
 */
function lonelyIntegerV1(a) {
  let map = {};
  a.forEach((el) => {
    if (map[el]) map[el]++;
    else map[el] = 1;
  });

  for (const key in map) {
    if (map[key] === 1) return Number(key);
  }
}

function lonelyIntegerV2(a) {
  for (const el of a) {
    if (a.indexOf(el) === a.lastIndexOf(el)) return el;
  }
}

module.exports = {
  lonelyIntegerV1,
  lonelyIntegerV2,
};
