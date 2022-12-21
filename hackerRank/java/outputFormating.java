package hackerRank.java;

import java.util.Scanner;

/*
 * https://www.hackerrank.com/challenges/java-output-formatting/problem?h_r=next-challenge&h_r=next-challenge&h_r=next-challenge&h_r=next-challenge&h_v=zen&h_v=zen&h_v=zen&h_v=zen&isFullScreen=true
 * 
 * # Input: 
 * java 100
 * cpp 65
 * python 50
 * 
 * Output:
 * ================================
 * java           100 
 * cpp            065 
 * python         050 
 * ================================
 */
public class OutputFormating {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("==============================");
        for (int i = 0; i < 3; i++) {
            String a = scan.next();
            int b = scan.nextInt();

            /**
             * format rules: %[flags][width][.precision]conversion-character
             * # %-15s
             * - [-15] flags, It is left-justified with trailing whitespace through the
             * first 15 characters
             * - [s] conversion character to format strings
             * input: String a = "test";
             * output: "test [...space]"
             * # %03d
             * - [03] flags, The result will be zero-padded
             * - [d] conversion character to format decimal integer
             * input: int = 55;
             * output = '055';
             * ref:
             * 1. https://www.baeldung.com/java-printstream-printf
             * 2.
             * https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Formatter.html#syntax
             */
            System.out.printf("%-15s%03d%n", a, b);
        }
        System.out.println("==============================");
        scan.close();
    }
}
