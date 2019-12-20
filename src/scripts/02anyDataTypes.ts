let myFavoriteNumber: string = 'seven';
//  not assignable to type 'string'.
// myFavoriteNumber = 7;

// 任意值类型：
// 1.any类型，则被允许赋值为任意类型
let myFavoriteNumber2: any ='eight';
myFavoriteNumber2 = 8;


// 2. 任意值的属性和方法
// 2.1在任意值上访问属性都是允许的
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);

// 2.2 允许调用任何方法 :声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
let awnyThing2: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

// *****重点*******
// 3.未声明类型的变量
// 变量如果在声明的时候，未指定类型，那么他会被识别为任意值类型
let something;
something = 'seven';
something = 7;

something.setName('Tom');

// 等价于
// let something: any;
// something = 'seven';
// something = 7;
//
// something.setName('Tom');
