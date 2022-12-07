/**
 * https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
 *
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 * Note:
 * - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 * - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 * Example:
 * 1. input = '12:01:00PM'
 *    Return '12:01:00'
 * 2. input = '12:01.00AM'
 *    Return '00:01:00'
 */

/*
 * @param {string} hours
 * @param {string} state
 * @returns {string} h
 */
function getHours(hours, state) {
  let h = Number(hours);
  if (state === "AM" && h === 12) {
    h -= 12;
  }

  if (state === "PM" && h >= 1 && h < 12) {
    h += 12;
  }

  if (h < 12) return "0" + h;

  return h;
}

function timeConversion(s) {
  const [hours, minutes, seconds] = s.split(":");
  const state = seconds.substring(2, 4);

  return `${getHours(hours, state)}:${minutes}:${seconds.substring(0, 2)}`;
}
