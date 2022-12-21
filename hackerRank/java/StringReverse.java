package hackerRank.java;

import java.util.Scanner;

public class StringReverse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String A = "java";// sc.next();
        int l = A.length();

        String result = "Yes";
        for (int i = 0; i < l / 2; i++) {
            if (A.charAt(i) != A.charAt(l - 1 - i)) {
                result = "No";
                break;
            }
        }

        System.out.println(result);
        sc.close();
    }
}
