package hackerRank.java;

import java.util.Scanner;

/**
 * https://www.hackerrank.com/challenges/java-end-of-file/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
 * 
 * "In computing, End Of File (commonly abbreviated EOF) is a condition in a
 * computer operating system where no more data can be read from a data source."
 * — (https://en.wikipedia.org/wiki/End-of-file)
 * 
 * The challenge here is to read n lines of input until you reach EOF, then
 * number and print all n lines of content.
 * Hint: Java's Scanner.hasNext() method is helpful for this problem.
 */
public class EndOfFiles {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        short i = 1;
        while (scan.hasNext()) {
            String string = scan.nextLine();
            System.out.printf("%d %s%n", i, string);
            i++;
        }
    }

}
