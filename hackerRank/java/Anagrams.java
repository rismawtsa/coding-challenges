package hackerRank.java;

/*
 * https://www.hackerrank.com/challenges/java-anagrams/problem?isFullScreen=true
 * 
 * sorting string
 * https://www.geeksforgeeks.org/sort-a-string-in-java-2-different-ways/
 */
public class Anagrams {
    static String sort(String string) {
        char arr[] = string.toLowerCase().toCharArray();

        char temp;
        int i = 0;
        while (i < arr.length) {
            int j = i + 1;
            while (j < arr.length) {
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
                j++;
            }
            i++;
        }
        System.out.println(arr);
        return new String(arr);
    }

    static boolean isAnagram(String a, String b) {
        if (a.length() != b.length())
            return false;

        if (sort(a).compareTo(sort(b)) != 0)
            return false;

        return true;
    }

    public static void main(String[] args) {
        String A = "anagram";
        String B = "margana";
        System.out.println(isAnagram(A, B));
    }
}
