const checkCashRegister = require("./cashRegister");

// cid is cash in drawer
const inputsAndOutputs = [
  {
    price: 19.5,
    cash: 20,
    cid: [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ],
    output: { status: "OPEN", change: [["QUARTER", 0.5]] },
  },
  {
    price: 3.26,
    cash: 100,
    cid: [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100],
    ],
    output: {
      status: "OPEN",
      change: [
        ["TWENTY", 60],
        ["TEN", 20],
        ["FIVE", 15],
        ["ONE", 1],
        ["QUARTER", 0.5],
        ["DIME", 0.2],
        ["PENNY", 0.04],
      ],
    },
  },
  {
    price: 19.5,
    cash: 20,
    cid: [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ],
    output: { status: "INSUFFICIENT_FUNDS", change: [] },
  },
  {
    price: 19.5,
    cash: 20,
    cid: [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 1],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ],
    output: { status: "INSUFFICIENT_FUNDS", change: [] },
  },
  {
    price: 19.5,
    cash: 20,
    cid: [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0],
    ],
    output: {
      status: "CLOSED",
      change: [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ],
    },
  },
];

test("should return an object", () => {
  const output = checkCashRegister(
    inputsAndOutputs[0].price,
    inputsAndOutputs[0].cash,
    inputsAndOutputs[0].cid
  );

  expect(typeof output).toBe("object");
});

for (let i = 0; i < inputsAndOutputs.length; i++) {
  const { price, cash, cid, output } = inputsAndOutputs[i];

  test(`checkCashRegister(${price}, ${cash}, ${cid}) should return ${JSON.stringify(
    output
  )}`, () => {
    const result = checkCashRegister(price, cash, cid);
    expect(result).toEqual(output);
  });
}
