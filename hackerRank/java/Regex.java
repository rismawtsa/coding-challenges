package hackerRank.java;

public class Regex {
    public static void main(String[] args) {
        String inputs[] = {
                "259.259.259.259",
                "266.266.266.266",
                "255.255.255.255",
                "555.555.555.555",
                "666.666.666.666",
                "249.249.249.249",
                "249.249.249.256"
        };

        int i = 0;
        while (i < inputs.length) {
            System.out.println(inputs[i] + " " + inputs[i].matches(new MyRegex().pattern));
            i++;
        }
    }
}

class MyRegex {
    public String pattern = "^((\\d{1,2}|0\\d{1,2}|1\\d{1,2}|2[0-4]\\d|25[0-5])\\.){3}(\\d{1,2}|0\\d{1,2}|1\\d{1,2}|2[0-4]\\d|25[0-5])$";
}