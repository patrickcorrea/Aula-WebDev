console.log('Hello World!')

//SEM JSX
function App() {
    return React.creatElement('h1',null,'Hello World sem build')
}

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
)

// COM JSX
//<h1>Hello World sem build</h1>