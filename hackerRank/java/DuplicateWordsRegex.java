package hackerRank.java;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

// https://www.hackerrank.com/challenges/duplicate-word/problem?isFullScreen=true
public class DuplicateWordsRegex {
    public static void main(String[] args) {
        String inputs[] = {
                "Goodbye bye bye world world world",
                "Sam went went to to to his business",
                "Reya is is the the best player in eye eye game",
                "in inthe",
                "Hello hello Ab aB"
        };
        // Test regex on this site https://regex101.com/r/6LUGrF/1
        // \b: word boundary
        // \w: any word character
        String regex = "\\b(\\w+)(?:\\s\\1\\b)+";
        Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);

        for (String inputString : inputs) {
            Matcher matcher = pattern.matcher(inputString);

            while (matcher.find()) {
                inputString = inputString.replaceAll(matcher.group(), matcher.group(1));
            }
            System.out.println(inputString);
        }
    }
}
