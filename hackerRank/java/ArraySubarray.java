package hackerRank.java;

import java.util.Scanner;

// https://www.hackerrank.com/challenges/java-negative-subarray/problem?isFullScreen=true
public class ArraySubarray {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int arr[] = new int[n];
        // A Scanner breaks its input into tokens using a delimiter pattern, which by
        // default matches whitespace. The resulting tokens may then be converted into
        // values of different types using the various next methods.
        // https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html
        for (int i = 0; i < n; i++) {
            arr[i] = scan.nextInt();
        }

        int subArr = 0;
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = i; j < n; j++) {
                sum += arr[j];
                if (sum < 0)
                    subArr++;
            }
        }

        System.out.println(subArr);
        scan.close();
    }
}
