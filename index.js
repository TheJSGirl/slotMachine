class App extends React.Component {
    render() {
        return <div>
            <h1>App component</h1>
            <Hello name="priyanka" text="welcome"/>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
