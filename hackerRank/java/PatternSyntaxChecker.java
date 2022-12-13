package hackerRank.java;

import java.util.regex.Pattern;

/*
 * https://www.hackerrank.com/challenges/pattern-syntax-checker/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
 */
public class PatternSyntaxChecker {
    public static void main(String[] args) {
        String patterns[] = { "([A-Z])(.+)", "[AZ[a-z](a-z)", "batcatpat(nat" };

        for (String pattern : patterns) {
            try {
                Pattern.compile(pattern);
                System.out.println("Valid");
            } catch (Exception e) {
                System.out.println("Invalid");
            }
        }
    }
}
