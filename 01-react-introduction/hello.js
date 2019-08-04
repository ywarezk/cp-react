

// const h1 = document.createElement('h1');
// h1.innerText = 'hello world from js';

// <h1>
//  <strong>
//     <u>hello world with underline</u>
//  </strong>
// </h1>
// const h1 = React.createElement(
//     'h1', 
//     null,
//     React.createElement(
//         'strong', 
//         null,
//         React.createElement(
//             'u', 
//             null,
//             'hello world with underline'
//         )
//     )
// )

// const h1 = (
//     <h1>
//         <strong>
//             <u>hello world with jsx</u>
//         </strong>
//     </h1>
// )

function HelloWorld() {
    return (
        <h1>
            <strong>
                <u>hello world with function</u>
            </strong>
        </h1>
    )
}

const container = document.getElementById('container');
// container.appendChild(h1);
ReactDOM.render(<HelloWorld />, container)