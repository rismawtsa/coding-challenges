package hackerRank.java;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class TagContentExtractor {
    public static void main(String[] args) {
        String inputs[] = {
                "<h1>Nayeem loves counseling</h1>",
                "<h1><h1>Sanjay has no watch</h1></h1><par>So wait for a while</par>",
                "<Amee>safat codes like a ninja</amee>",
                "<SA premium>Imtiaz has a secret crush</SA premium>"
        };

        for (String item : inputs) {
            // https://docs.oracle.com/javase/6/docs/api/java/util/regex/Pattern.html#matcher(java.lang.CharSequence)
            // \1 means whatever the first capturing group matched, the first group is (.+)
            Pattern pattern = Pattern.compile("<(.+)>([^<]+)</\\1>");
            Matcher matcher = pattern.matcher(item);

            int count = 0;
            while (matcher.find()) {
                // matcher.group(2) capture the result of ([^<]+)
                System.out.println(matcher.group(2));
                count++;
            }

            if (count == 0) {
                System.out.println("none");
            }
        }
    }
}