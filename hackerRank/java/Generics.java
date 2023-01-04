package hackerRank.java;

// https://www.hackerrank.com/challenges/java-generics/problem?isFullScreen=true

// Generic Class
class Test<T> {
    private T obj;

    Test(T obj) {
        this.obj = obj;
    }

    public T getObject() {
        return this.obj;
    }
}

class Printer {
    // Generic Methods
    <T> void printArray(T[] list) {
        for (T item : list) {
            System.out.println(item);
        }
    }
}

public class Generics {
    static <T> void testGenerics(T obj) {
        System.out.println(obj);
    }

    static <T> T testGeneric(T obj) {
        return obj;
    }

    public static void main(String[] args) {
        // Test Generic Class
        System.out.println("==== Generic Class ====");
        Test<Integer> intTest = new Test<>(1);
        System.out.println(intTest.getObject());
        Test<String> sTest = new Test<>("Hello");
        System.out.println(sTest.getObject());

        System.out.println();

        // Test Generic Methods
        System.out.println("==== Generic Method ====");
        Integer integer[] = { 1, 2, 3 };
        String string[] = { "Hello", "world" };
        Printer printer = new Printer();
        printer.printArray(integer);
        printer.printArray(string);

        testGenerics("ok");
        System.out.println(testGeneric(1));
    }
}