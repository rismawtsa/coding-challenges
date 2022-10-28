/**
 * https://leetcode.com/problems/ransom-note/
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters
 * from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 *
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 *
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @returns {boolean}
 */
// my first solution
var canConstruct = function (ransomNote, magazine) {
  let objMagazine = {};

  for (let i of magazine) {
    if (objMagazine[i]) objMagazine[i] += 1;
    else objMagazine[i] = 1;
  }

  for (let i of ransomNote) {
    if (!objMagazine[i]) return false;
    if (objMagazine[i] <= 0) return false;

    if (objMagazine[i] && objMagazine[i] > 0) {
      objMagazine[i] -= 1;
    }
  }

  return true;
};

// solution on the comment written by ChihoNg
const canConstruct1 = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  var ransomNoteArr = ransomNote.split("");
  var oldMagazineLength = magazine.length;
  ransomNoteArr.forEach(function (item, index) {
    magazine = magazine.replace(item, "");
    console.log(magazine);
  });
  if (oldMagazineLength == magazine.length + ransomNoteArr.length) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  canConstruct,
  canConstruct1,
};
