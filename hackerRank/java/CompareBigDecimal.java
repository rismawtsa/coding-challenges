package hackerRank.java;

import java.math.BigDecimal;
import java.util.Arrays;

//https://www.hackerrank.com/challenges/java-bigdecimal/problem?h_r=next-challenge&h_v=zen&isFullScreen=true
public class CompareBigDecimal {
    public static void main(String[] args) {
        String inputs[] = {
                "-100",
                "50",
                "0",
                "56.6",
                "90",
                "0.12",
                ".12",
                "02.34",
                "000.000"
        };

        System.out.println("============== ALGORITHM ============");
        for (int i = 1; i < inputs.length; i++) {
            for (int j = i; j >= 1; j--) {
                System.out.println(
                        i + " " + inputs[j] + " " + j + " " + inputs[j - 1] + " " + Arrays.toString(inputs));
                if (new BigDecimal(inputs[j]).compareTo(new BigDecimal(inputs[j - 1])) > 0) {
                    String temp = inputs[j];
                    inputs[j] = inputs[j - 1];
                    inputs[j - 1] = temp;
                }
            }
        }
        System.out.println("============== END ============");

        System.out.println();
        System.out.println("============== RESULT ============");
        for (int i = 0; i < inputs.length; i++) {
            System.out.println(inputs[i]);
        }
    }
}
