package hackerRank.java;

import java.util.Scanner;

// https://www.hackerrank.com/challenges/java-strings-introduction/problem?isFullScreen=true
public class StringIntro {
    private static String capitalizeString(String string) {
        String firstLetter = string.substring(0, 1);
        String restLetters = string.substring(1);
        return firstLetter.toUpperCase() + restLetters;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        String A = sc.next();
        String B = sc.next();

        System.out.println(A.length() + B.length());
        System.out.println(A.compareTo(B) > 0 ? "Yes" : "No");
        System.out.println(capitalizeString(A) + " " + capitalizeString(B));
        sc.close();
    }
}
