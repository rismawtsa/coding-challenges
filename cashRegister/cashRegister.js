// source: Freecodecamp's challange: Cash Register
// Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register

/* my naive solution :)
 * TODO add some comments to make it easy to understand as read it
 */
const CURRENCY_AMOUNT = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  "ONE HUNDRED": 100,
};

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let arr = [...cid];
  arr.reverse();
  let change = [];
  let amount = 0;

  arr.forEach((value) => {
    if (changeDue > 0 && changeDue >= CURRENCY_AMOUNT[value[0]]) {
      let diff = parseFloat((changeDue - value[1]).toFixed(2));
      if (diff >= 0) {
        change.push([value[0], value[1]]);
        changeDue = diff;
      } else {
        let multiply = CURRENCY_AMOUNT[value[0]];
        let diff2 = parseFloat((changeDue - multiply).toFixed(2));
        while (diff2 >= CURRENCY_AMOUNT[value[0]]) {
          multiply += CURRENCY_AMOUNT[value[0]];
          diff2 = parseFloat((changeDue - multiply).toFixed(2));
        }
        change.push([value[0], multiply]);
        changeDue = diff2;
        amount += value[1] - multiply;
      }
    } else {
      amount += value[1];
    }
  });

  if (amount > 0 && changeDue === 0) return { status: "OPEN", change };
  else if (amount === 0 && changeDue == 0)
    return { status: "CLOSED", change: cid };
  else return { status: "INSUFFICIENT_FUNDS", change: [] };
}

module.exports = checkCashRegister;
