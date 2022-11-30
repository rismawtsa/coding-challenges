const Website = require("./mostVisitedPages");

test(`input: [5, 'https://translate.google.com', 'https://google.com', 'https://jestjs.io', 'https://google.com', 'https://google.com'] should return [3, 'https://google.com', 'https://jestjs.io', 'https://translate.google.com']`, () => {
  const website = new Website([
    5,
    "https://translate.google.com",
    "https://google.com",
    "https://jestjs.io",
    "https://google.com",
    "https://google.com",
  ]);

  expect(website.getMostVisitedPages()).toEqual([
    3,
    "https://google.com",
    "https://jestjs.io",
    "https://translate.google.com",
  ]);
});
