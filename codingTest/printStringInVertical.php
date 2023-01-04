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
        $stringLength = strlen($array[$x]);
        if ($max < $stringLength) {
            $max = $stringLength;
        }
    }

    // === store to the result array ===
    // create multidimentional array, each array inside is adjustable in length of input array
    // to store every character on the same index of each string on the array
    // ["hello", "ris"] => [["h", "r"], ["e", "i"], ....]
    $resultArray = array();
    for ($x = 0; $x < $max; $x++) {
        $a = 0;
        $arr = array();
        while ($a < $arrayLength) {
            $string = $array[$a];

            $char = "";
            if ($x < strlen($string)) {
                $char = $array[$a][$x];
            }

            array_push($arr, $char);
            $a++;
        }
        array_push($resultArray, $arr);
    }

    // print the result
    for ($x = 0; $x < count($resultArray); $x++) {
        $length = count($resultArray[$x]);
        for ($y = 0; $y < $length; $y++) {
            $string = $resultArray[$x][$y];
            if($y < $length - 1) {
                $string .= "|";
            }
            echo $string;
        }
        echo "\n";
    }
}

function printVerticalV2($arrayLength, $array)
{
    // find the max length of the elements in the array
    $max = 0;
    for ($x = 0; $x < $arrayLength; $x++) {
        $stringLength = strlen($array[$x]);
        if ($max < $stringLength) {
            $max = $stringLength;
        }
    }

    for ($x = 0; $x < $max; $x++) {
        $a = 0;
        while ($a < $arrayLength) {
            $string = strlen($array[$a]) > $x ? $array[$a][$x] : " ";
            echo $string."|";
            $a++;
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
printVerticalV2($arrayLength, $array);
