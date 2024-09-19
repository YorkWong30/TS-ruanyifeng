// 1. 类型声明
// 冒号 + 类型
let num = 10;
const toBeString = (num) => {
    return String(num);
};
console.log(toBeString(num));
// 2. 类型推断
let num2 = 10;
num2 = '10'; // 报错: TypeScript 会自己推断类型
//学习 TypeScript 需要分清楚“值”（value）和“类型”（type）。
