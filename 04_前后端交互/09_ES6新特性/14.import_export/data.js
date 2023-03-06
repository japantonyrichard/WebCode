//导出
//1.每一条数据单独导入
/* export let a = 10;
export let b = 100;
export let c = 'hello'; */

//2.合并按需导出
let a = 10;
let b = 100;
let c = 'hello';
export { a, b };
//导出函数
export function fn() {
    return 'hello';
}
//导出类
/* export class Person {
    constructor(name) {
        this.name = name;
    }
} */
class Person {
    constructor(name) {
        this.name = name;
    }
}
export class Boy extends Person {
    constructor(name) {
        super(name);
    }
}

