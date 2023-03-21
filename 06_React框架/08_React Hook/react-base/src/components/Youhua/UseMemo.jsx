import React, { useMemo, useState } from 'react'

export default function UseMemo() {

    // 定义数组
    const [arr, setArr] = useState([1, 2, 3, 4]);

    // 数组求和
    function sumFn() {
        console.log('数组求和方法调用....');

        // let sum=10;
        // for (let i = 0; i < arr.length; i++) {
        //     // sum+=arr[i]
        //     sum=sum+arr[i];
        // }


        const sum = arr.reduce((prev, item) => {
            return prev + item   //0 +1   //1+2  //3 +3
        }, 0)
        return sum;
    }
    // 缓存结果
    const sumMemo = useMemo(() => {
        console.log('数组求和...... useMemo调用....');
        const sum = arr.reduce((prev, item) => {
            return prev + item   //0 +1   //1+2  //3 +3
        }, 0)
        return sum;
    }, [arr])


    return (
        <div>
            <h2>UseMemo --数组求和</h2>
            <p>
                方法调用：{sumFn()}
            </p>
            <p>
                方法调用：{sumFn()}
            </p>
            <p>
                方法调用：{sumFn()}
            </p>
            <p>
                useMemo 求和：{sumMemo}
            </p>
            <p>
                useMemo 求和：{sumMemo}
            </p>
            <p>
                useMemo 求和：{sumMemo}
            </p>
            <p>
                <button onClick={()=>{setArr([1,2,4,6])}}>修改数组</button>
            </p>
        </div>
    )
}
