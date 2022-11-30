<?php
/**
 * This program runs on the cli (command line interface)
 * How to run?
 * - open the terminal, go to the directory where this file is located, then issue `php printStringInVertical.php`
 * - Enter the requested data
*/


/**
* print the string in a vertical way
* input: ["ris", "ma"]
* ouput: r | m
*        i | a
*        s |
*
* @param {number} arrayLength
* @param {string[]} array
*/

function printVertical($arrayLength, $array)
{
    // find the max length
    $max = 0;
    for ($x = 0; $x < $arrayLength; $x++) {
        $stingLength = strlen($array[$x]);
        if ($max < $stingLength) {
            $max = $stingLength;
        }
    }

    // === store to the result array ===
    // create multidimetional array, each array inside is adjustable in length of input array
    // to store every character on the same index of each string on the array
    // ["hello", "ris"] => [["h", "r"], ["e", "i"], ....]
    $resulArray = array();
    for ($x = 0; $x < $max; $x++) {
        $a = 0;
        $arr = array();
        while ($a < $arrayLength) {
            $string = $array[$a];

            $char = " ";
            if ($x < strlen($string)) {
                $char = $array[$a][$x];
            }

            array_push($arr, $char);
            $a++;
        }
        array_push($resulArray, $arr);
    }

    // print the result
    for ($x = 0; $x < count($resulArray); $x++) {
        for ($y = 0; $y < count($resulArray[$x]); $y++) {
            if ($y === count($resulArray[$x]) - 1) {
                echo " ".$resulArray[$x][$y];
            } else {
                echo " ".$resulArray[$x][$y]. " |";
            }
        }
        echo "\n";
    }
}

// Get the input from stdin
echo "Enter the length of the array: ";
$arrayLength = trim(fgets(STDIN, 1024));
echo "Enter the items in the array: \n";
$array = array();
for ($x = 0; $x < $arrayLength; $x++) {
    $item = trim(fgets(STDIN, 1024));
    array_push($array, $item);
}

echo "\n === Output === \n";
printVertical($arrayLength, $array);
