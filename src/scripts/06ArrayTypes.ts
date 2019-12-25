// 数组的类型
// 1.「类型 + 方括号」表示法

let fibonacci1: number[] = [1, 1, 2, 3, 5];

//2. 数组中的项不允许出现其他类型
// let fibonacci2: number[] = [1, '1', 2, 3, 5];

// Type 'string' is not assignable to type 'number'.


//3. 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制
// fibonacci1.push('8');


//4. 数组泛型
let fibonacci12: Array<number> = [1, 1, 2, 3, 5];


//5. 接口表示数组
interface NumberArray {
    [index: number]: number;
}

let fibonacci123: NumberArray = [1, 1, 2, 3, 5];

// NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。  不常用

interface Info {   // info是一个接口
    a: number
    b: string
}


let app: Info[] = [];     //  这里数组的每一项需要满足{a: number, b: string}这种类型，这里定义app是一个空数组
app = [{a: 1, b: 'b'}]


// 6. 类数组 Array-like Object
function sum1() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

function sum() {
    let args: IArguments = arguments;
}

//


