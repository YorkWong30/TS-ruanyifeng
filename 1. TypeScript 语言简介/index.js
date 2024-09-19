// 概述
// 目的并不是创造一种全新语言，而是增强 JavaScript 的功能，使其更适合多人合作的企业级项目。
// TypeScript 对 JavaScript 添加的最主要部分，就是一个独立的类型系统。
/*********************************************************************/
// 类型的概念
// 类型是人为添加的一种编程约束和用法提示
function addOne(n) {
    console.log('n=', n);
    return n + 1;
}
addOne('hello'); // 类型不匹配
/*********************************************************************/
//动态类型与静态类型
// JavaScript 的类型系统非常弱，而且没有使用限制，运算符可以接受各种类型的值。在语法上，JavaScript 属于动态类型语言。
/*********************************************************************/
//静态类型的优点
// （1）有利于代码的静态分析。
// （2）有利于早期错误发现。
let obj = { msg: 'hello' };
obj.mag = 'world'; // 报错
console.log(obj);
// （3）有利于统一代码风格。
// （4）有利于大型项目的开发。
/*********************************************************************/
// 静态类型的缺点
