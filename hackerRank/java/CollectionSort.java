package hackerRank.java;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;

// https://www.hackerrank.com/challenges/java-sort/problem?isFullScreen=true
class Student implements Comparable<Student> {
    private int id;
    private String fname;
    private double cgpa; // the full form of CGPA is Cumulative Grade Point Average

    public Student(int id, String fname, double cgpa) {
        super();
        this.id = id;
        this.fname = fname;
        this.cgpa = cgpa;
    }

    public int getId() {
        return id;
    }

    public String getFname() {
        return fname;
    }

    public double getCgpa() {
        return cgpa;
    }

    @Override
    public int compareTo(Student anotherStudent) {
        return Comparator.comparingDouble(Student::getCgpa)
                .reversed()
                .thenComparing(Student::getFname)
                .thenComparing(Student::getId)
                .compare(this, anotherStudent);
    }

}

public class CollectionSort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int testCases = Integer.parseInt(sc.nextLine());

        List<Student> studentList = new ArrayList<Student>();
        while (testCases > 0) {
            int id = sc.nextInt();
            String fname = sc.next();
            double cgpa = sc.nextDouble();

            Student student = new Student(id, fname, cgpa);
            studentList.add(student);

            testCases--;
        }

        Collections.sort(studentList);
        studentList.forEach(student -> System.out.println(student.getFname()));

        sc.close();
    }
}
