// 类型别名

// 用来给一个类型起一个新名字

type Name = string;
type NameResolver = () => string;
// 类型别名常用于联合类型。
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
