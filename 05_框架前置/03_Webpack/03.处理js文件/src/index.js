// import '@babel/polyfill'

let a = 100;
const PI = 3.14;
let foo = () => {
    console.log('箭头函数');
}
new Promise((resolve) => {
    setTimeout(() => {
        resolve('ok')
    }, 1000)
})