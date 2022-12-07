# Lonely Integer

[Source](https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two)

## Problem

Given an array of integers, where all elements but one occur twice, find the unique element.

#### Example:

a = [1, 2, 3, 4, 3, 2, 1]
The unique element is 4

#### Function Description

Complete the lonelyinteger function in the editor below.
lonelyinteger has the following parameter(s):
int a[n]: an array of integers

#### Returns

int: the element that occurs only once

#### Constraints

- 1 <= n <= 100
- It is guaranteed that n is an odd number and that there is one unique element.
- 0 <= a[i] <= 100, where 0 <= i < n

> n: the number of integers in the array

## Solutions In Javascript

1. Using Map

   - Create a map variable
   - Iterate the array `a`
   - If the elements of the array is in map increment its value, otherwise set its value to 1
   - End loop
   - Iterate the map and check value of each properties
   - If the value is equal to 1 return the key

2. Using IndexOf and LastIndexOf functions

   - Iterate the array `a`
   - If `a.indexOf(element)` equal to `a.lastIndexOf(element)`, return the element

     <br />
     <br />

     > indexOf() returns the first index at which of a given element can be found in an array
     >
     > lastOfIndexOf() returns the last index at which of a given element can be found in an array
     >
     > if the returns of indexOf() equal to lastIndexOf() it means that the element occurs only one
