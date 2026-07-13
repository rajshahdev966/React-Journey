let div = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        React.createElement('span', null, "I am from REACT")
    )

)

let section = document.querySelector("section")
let rootNode = ReactDOM.createRoot(section)
rootNode.render(div)