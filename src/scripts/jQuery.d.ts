// 搜索你需要的声明文件 https://microsoft.github.io/TypeSearch/

// 推荐的是使用 @types 统一管理第三方库的声明文件。
// @types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
// npm install @types/jquery --save-dev


// src/jQuery.d.ts

// declare let jQuery: (selector: string) => any;

// 全局变量都是禁止修改的常量，所以大部分情况都应该使用 const 而不是 var 或 let。
declare const jQuery: (selector: string) => any;

