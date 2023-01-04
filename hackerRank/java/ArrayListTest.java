package hackerRank.java;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// https://www.hackerrank.com/challenges/java-arraylist/problem?isFullScreen=true
public class ArrayListTest {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        List<List<Integer>> arr = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int d = scan.nextInt();
            List<Integer> arrRow = new ArrayList<>();
            for (int j = 0; j < d; j++) {
                arrRow.add(scan.nextInt());
            }
            arr.add(arrRow);
        }

        int q = scan.nextInt();
        for (int i = 0; i < q; i++) {
            int x = scan.nextInt();
            int y = scan.nextInt();

            System.out.println(arr.toString());
            try {
                System.out.println(arr.get(x - 1).get(y - 1));
            } catch (IndexOutOfBoundsException e) {
                System.out.println("ERROR!");
            }
        }

        scan.close();
    }
}
