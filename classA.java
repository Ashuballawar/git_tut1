abstract class abst {
    abstract void meth1();

    abst() {
        System.out.println("a constructor");
    }

    void meth2() {
        System.out.println("meth");

    }

    static {
        System.out.println("1 static block");
    }

    static void meth3() {
        System.out.println("static meth");
    }

    public static void main(String[] args) {
        meth3();
    }
}

public class classA extends abst {

    @Override
    void meth1() {
        System.out.println("method overiden");

    }

    public static void main(String[] args) {
        classA obj = new classA();
        obj.meth1();

    }
}