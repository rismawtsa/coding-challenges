package hackerRank.java;

import java.util.Calendar;

class Result {
    /*
     * Complete the 'findDay' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     * 1. INTEGER month
     * 2. INTEGER day
     * 3. INTEGER year
     */

    public static String findDay(int month, int day, int year) {
        Calendar calendar = Calendar.getInstance();
        // https://docs.oracle.com/javase/7/docs/api/java/util/Calendar.html
        // set(): sets the values for the calender fields. Modifier void--not return any
        // value
        // Month value is 0-based. e.g., 0 for January
        calendar.set(year, month - 1, day);
        int dayInInt = calendar.get(Calendar.DAY_OF_WEEK) - 1;
        String daysOfWeek[] = { "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY",
                "THURSDAY", "FRIDAY", "SATURDAY" };

        return daysOfWeek[dayInInt];
    }

}

public class DateAndTime {
    public static void main(String[] args) {
        String day = Result.findDay(8, 14, 2017);
        System.out.println(day);
    }
}
