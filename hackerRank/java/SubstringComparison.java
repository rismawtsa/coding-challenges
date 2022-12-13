package hackerRank.java;

import java.util.Scanner;

public class SubstringComparison {
    public static String getSmallestAndLargest(String s, int k) {
        String smallest = s.substring(0, k);
        String largest = smallest;

        int i = 1;
        while (i + k <= s.length()) {
            String substring = s.substring(i, i + k);
            if (smallest.compareTo(substring) > 0) {
                smallest = substring;
            } else if (largest.compareTo(substring) < 0) {
                largest = substring;
            }
            i++;
        }

        return smallest + "\n" + largest;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.next();
        int k = scan.nextInt();
        scan.close();

        System.out.println(getSmallestAndLargest(s, k));
    }
}
