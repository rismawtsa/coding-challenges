/*
  return an array of the URLs sorted by visited count. The most visited in the first list. If there are the same number of URLs, then sort them alphabetically
  input: 5
    https://translate.google.com
    https://google.com
    https://jestjs.io
    https://google.com
    https://google.com
  output: 3
    https://google.com
    https://jestjs.io
    https://translate.google.com
*/

class Website {
  constructor(input) {
    const [count, ...urls] = input;
    this.urls = urls;
  }

  getMostVisitedPages() {
    let urlObj = {};

    // to count visited on each page and store it to object variable
    this.urls.forEach((url) => {
      if (urlObj[url]) {
        urlObj[url] += 1; // if the page is already at the object add 1
      } else {
        urlObj[url] = 1;
      }
    });

    //convert object to array
    const entries = Object.entries(urlObj);

    // sort the array
    for (let i = 0; i < entries.length; i++) {
      for (let j = i + 1; j < entries.length; j++) {
        if (entries[i][1] < entries[j][1]) {
          const temp = entries[i];
          entries[i] = entries[j];
          entries[j] = temp;
        } else if (entries[i][1] === entries[j][1]) {
          if (entries[i][0] > entries[j][0]) {
            const temp = entries[i];
            entries[i] = entries[j];
            entries[j] = temp;
          }
        }
      }
    }

    const result = entries.map((item) => item[0]);
    return [entries.length, ...result];
  }
}

module.exports = Website;
