/*
Source: leetcode's challenge - 412. Fizz Buzz
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 
Example :

Input: n = 3
Output: ["1","2","Fizz"]

Link: https://leetcode.com/problems/fizz-buzz/
*/

// naive approach
const fizzBuzzNaiveApproach = function (n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(`${i}`);
    }
  }

  return answer;
};

//String concatenation
const fizzBuzzStringConcat = function (n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) {
      str += "Fizz";
    }

    if (i % 5 === 0) {
      str += "Buzz";
    }

    if (str === "") {
      // not divisible by 3 or 5
      str += `${i}`;
    }

    answer.push(str);
  }

  return answer;
};

// Using Hash or object
const FIZZBUZZ_OBJ = {
  3: "Fizz",
  5: "Buzz",
};
const fizzBuzzHash = function (n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    let str = "";
    Object.keys(FIZZBUZZ_OBJ).forEach((key) => {
      if (i % key === 0) {
        str += FIZZBUZZ_OBJ[key];
      }
    });

    if (str === "") {
      // not divisible by keys of the FIZZBUZZ_OBJ
      str += `${i}`;
    }

    answer.push(str);
  }

  return answer;
};

module.exports = {
  fizzBuzzNaiveApproach,
  fizzBuzzStringConcat,
  fizzBuzzHash,
};
