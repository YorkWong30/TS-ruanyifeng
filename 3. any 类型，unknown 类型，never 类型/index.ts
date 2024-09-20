// any 类型
// 变量类型一旦设为any，TypeScript 实际上会关闭这个变量的类型检查。

/*****************************************************/

// unknown 类型
// 严格版的any
// 和any的相同点是，unknown类型的变量可以赋值给任意类型
let unValue: unknown = 123
let unValue2: unknown = 'hello'

// 和any的不同:
// 1.不能直接赋值给其他类型的变量（除了any类型和unknown类型）
let unValue3: unknown = 'world'
let x: number = unValue3 // 报错

// 2.不能直接调用unknown类型变量的方法和属性。
let unValue4: unknown = 'world'
unValue4.toLocaleLowerCase() // 报错

// 3.unknown类型变量能够进行的运算是有限的，只能进行比较运算（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，其他运算都会报错。
let unValue5: unknown = 1
unValue5++ // 报错

// 解决办法： “类型缩小”，unknown类型变量才可以使用
let unValue6: unknown = 1
if(typeof unValue6 === 'number') {
    unValue6++ // 正确
}
//在集合论上，unknown也可以视为所有其他类型（除了any）的全集，所以它和any一样，也属于 TypeScript 的顶层类型。

/*****************************************************/

// never 类型
// 该类型为空，不包含任何值
// never类型的使用场景
// 1.函数返回值为never，表示函数永远不会返回
function error(message: string): never {
    throw new Error(message)
}
// 2.如果一个变量可能有多种类型（即联合类型），通常需要使用分支处理每一种类型。这时，处理所有可能的类型之后，剩余的情况就属于never类型。
function fn(x:string|number) {
    if (typeof x === 'string') {
        // ...
    } else if (typeof x === 'number') {
        // ...
    } else {
        x; // never 类型
    }
}
// TypeScript 就相应规定，任何类型都包含了never类型。因此，never类型是任何其他类型所共有的，TypeScript 把这种情况称为“底层类型”（bottom type）。


// 总结：
// TypeScript 有两个“顶层类型”（any和unknown），但是“底层类型”只有never唯一一个。
