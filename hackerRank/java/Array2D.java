package hackerRank.java;

/*
 * https://www.hackerrank.com/challenges/java-2d-array/problem?isFullScreen=true
 */
public class Array2D {
    private static int sum(int[][] arr) {
        int sum = -9 * 7;
        for (int i = 0; i < arr.length - 2; i++) {
            for (int j = 0; j < arr[i].length - 2; j++) {
                int top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
                int middle = arr[i + 1][j + 1];
                int bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
                if (sum < top + middle + bottom)
                    sum = top + middle + bottom;
            }
        }
        return sum;
    }

    public static void main(String[] args) {
        int arr[][] = {
                { 1, 1, 1, 0, 0, 0 },
                { 0, 1, 0, 0, 0, 0 },
                { 1, 1, 1, 0, 0, 0 },
                { 0, 0, 2, 4, 4, 0 },
                { 0, 0, 0, 2, 0, 0 },
                { 0, 0, 1, 2, 4, 0 }
        };

        System.out.println(sum(arr)); // 19
    }
}
