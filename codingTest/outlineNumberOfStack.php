<?php
/**
 * This program runs on the cli (command line interface)
 * 
 * How to run?
 * - open the terminal, go to the directory where this file is located, then issue `php outlineNumbeOfStack.php`
 * - Enter the requested data
*/


/**
 * Get the outline number of the stack of squares
 * @param {number} arrayLength
 * @param {string[]} array
 * @return {number} outline
 */

 // TODO handle holes side by side
function getOutline($arrayLength, $array)
{
    $outline = 0;
    for ($i=0; $i < $arrayLength; $i++) {
        // the number of sides of the squares =  $stackSquaresNumber * 4
        // stacked side  = ($stackSquaresNumber - 1) * 2
        // a side one the ground = 1
        $currentStack = abs($array[$i]);
        $squareSide = ($currentStack * 4) - (($currentStack - 1) * 2) - 1;

        $a = $squareSide;
        if ($i == 0) {
            if ($array[$i + 1] > 0 && $array[$i] > 0) {
                if ($currentStack > $array[$i + 1]) {
                    $a -= $array[$i + 1];
                } elseif ($currentStack <= $array[$i + 1]) {
                    $a -= $currentStack;
                }
            }
        } elseif ($i < $arrayLength - 1) {
            if ($array[$i - 1] > 0 && $array[$i] > 0) {
                if ($array[$i - 1] < $currentStack) {
                    $a -= $array[$i - 1];
                } elseif ($array[$i - 1] >= $currentStack) {
                    $a -= $currentStack;
                }
            }

            if ($array[$i + 1] > 0 && $array[$i] > 0) {
                if ($currentStack > $array[$i + 1]) {
                    $a -= $array[$i + 1];
                } elseif ($currentStack <= $array[$i + 1]) {
                    $a -= $currentStack;
                }
            }
        } else {
            if ($array[$i - 1] > 0 && $array[$i] > 0) {
                if ($array[$i - 1] < $currentStack) {
                    $a -= $array[$i - 1];
                } elseif ($array[$i - 1] >= $currentStack) {
                    $a -= $currentStack;
                }
            }
        }

        echo $currentStack." ".$squareSide." ".$a."\n";
        $outline += $a;
    }
    return $outline;
}

echo "Enter the length of the array: ";
$arrayLength = trim(fgets(STDIN, 1024));

echo "Enter the items in the array: \n";
$array = array();
for ($x = 0; $x < $arrayLength; $x++) {
    $item = trim(fgets(STDIN, 1024));
    array_push($array, $item);
}

// [1, 2, 1, 3, -1, 0] = 16
// [0, 1, 2] = 7
echo "\n ===Output=== \n";
echo "The outline is ".getOutline($arrayLength, $array);
