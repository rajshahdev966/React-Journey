let rh1 = React.createElement("h1", {}, "I am from React")



let root = document.querySelector("#root")
let rootOfReactDom = ReactDOM.createRoot(root)
rootOfReactDom.render(rh1)