class MyClass {
    static counter = 0;
    constructor() {
        MyClass.counter++;
    }
    static getCount() {
        return MyClass.counter;
    }
}
let obj1 = new MyClass();
let obj2 = new MyClass();
let obj3 = new MyClass();
let obj4 = new MyClass();
let obj5 = new MyClass();
let obj6 = new MyClass();

console.log(MyClass.getCount())
