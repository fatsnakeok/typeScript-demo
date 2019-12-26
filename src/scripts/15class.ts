// ES6中类的用法
// 1属性和方法
// 使用 class 定义类，使用 constructor 定义构造函数。
// 通过 new 生成新实例的时候，会自动调用构造函数
class Animal11 {
    name: string;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `My name is ${this.name}`;
    }
}

let a = new Animal11('Jack');
console.log(a.sayHi()); // My name is Jack

//2类的集成
//使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。

class Cat extends Animal11 {
    constructor(name) {
        super(name); // 调用父类的 constructor(name)
        console.log(this.name);
    }

    sayHi() {
        return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
    }
}

let c1 = new Cat('Tom'); // Tom
console.log(c1.sayHi()); // Meow, My name is Tom

//3存取器
// 使用 getter 和 setter 可以改变属性的赋值和读取行为
class Animal12 {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return 'Jack';
    }

    set name(value) {
        console.log('setter: ' + value);
    }
}

let d = new Animal12('Kitty'); // setter: Kitty
d.name = 'Tom'; // setter: Tom
console.log(d.name); // Jack

//4静态方法
//使用static修饰符修饰的方法称为静态方法，他们不需要实例化，而是直接通过类来调用
class Animal13 {
    name: string;

    constructor(name) {
        this.name = name;
    }

    static isAnimal(a) {
        return a instanceof Animal13;
    }
}

let e = new Animal13('Jack');
Animal13.isAnimal(e);
// e.isAnimal(e); // 不需要实例化，而是直接通过类来调用


// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的


///////////////////属性////////////////////

// public
class Animal14 {
    public name;

    public constructor(name) {
        this.name = name;
    }
}

let f = new Animal14('Jack');
// name 被设置为了 public，所以直接访问实例的 name 属性是允许的。
console.log(f.name);
f.name = 'Tom';
console.log(f.name);


// private 定义的属性是无法在类外部直接存取的
class Animal15 {
    private name;

    public constructor(name) {
        this.name = name;
    }
}

let g = new Animal15('Jack');
// console.log((g.name); // 定义的属性是无法在类外部直接存取的
// g.name = 'Tom'; // 定义的属性是无法在类外部直接存取的

////////////////////////////////////////////////////////
// 注意的是，TypeScript 编译之后的代码中，并没有限制 private 属性在外部的可访问性
////////////////////////////////////////////////////////


// protected修饰的允许在子类中访问
class Animal16 {
    protected name;

    public constructor(name) {
        this.name = name;
    }
}

class Cat1 extends Animal16 {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
}

///////////////////函数////////////////////
// private修饰函数 不允许被继承或实例化
class Animal17 {
    public name;

    private constructor(name) {
        this.name = name;
    }
}

// class Cat12 extends Animal17 {
//     constructor(name) {
//         super(name); // 父类函数被private修饰，不允许被继承被调用
//     }
// }

// let a = new Animal17('Jack');

// 当构造函数修饰为 protected 时，该类只允许被继承：
class Animal18 {
    public name;

    protected constructor(name) {
        this.name = name;
    }
}

class Cat123 extends Animal18 {
    constructor(name) {
        super(name);
    }
}

// let a1 = new Animal18('Jack');
let cat123 = new Cat123('Jack');

// index.ts(13,9): TS2674: Constructor of class 'Animal' is protected and only accessible within the class declaration.

////////////////////////////////////////////////////////
// 修饰符还可以使用在构造函数参数中，等同于类中定义该属性，使代码更简洁
class Animal19 {
    // public name: string;
    public constructor(public name) {
        this.name = name;
    }
}

/////////////////////////////抽象类////////////////////////////
// abstract 用于定义抽象类和其中的抽象方法。
// 抽象类是不允许被实例化的
// abstract class Animal19 {
//     public name;
//     public constructor(name) {
//         this.name = name;
//     }
//     public abstract sayHi();
// }
//
// let a = new Animal('Jack');

// index.ts(9,11): error TS2511: Cannot create an instance of the abstract class 'Animal'.

// 抽象类中的抽象方法必须被子类实现
abstract class Animal20 {
    public name;

    public constructor(name) {
        this.name = name;
    }

    public abstract sayHi();
}

// // 抽象类中的抽象方法必须被子类实现
// class Cat12345 extends Animal20 {
//     public eat() {
//         console.log(`${this.name} is eating.`);
//     }
//     // 实现抽象方法
//     // public sayHi() {
//     //     console.log(`Meow, My name is ${this.name}`);
//     // }
// }

// let cat = new Cat12345('Tom');

// index.ts(9,7): error TS2515: Non-abstract class 'Cat' does not implement inherited abstract member 'sayHi' from class 'Animal'.


class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHi(): string {
        return `My name is ${this.name}`;
    }
}

// 给类加上 TypeScript 的类型很简单，与接口类似
let a12345: Animal = new Animal('Jack');
console.log(a12345.sayHi()); // My name is Jack
