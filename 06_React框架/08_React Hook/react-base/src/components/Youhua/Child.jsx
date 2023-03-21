import React from 'react'


const Child = React.memo((props) => {
    console.log('child render。。。。。。');
    return (
        <div>Child
            <p>
                num:{props.num}
            </p>
        </div>
    )
})

export default Child


// export default function Child() {
//     console.log('child render。。。。。。');
//     return (
//         <div>Child</div>
//     )
// }
