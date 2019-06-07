class App extends React.Component {
  render() {
    //it is possible to pass different kind of data in props
    return (
      <div>
        <Hello
          to="Darth"
          from="Luke"
          bangs={12}
        />
        <Hello
          to="Yoda"
          bangs={4}
        />
        <Hello
          to="Luke"
          from="Leia"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
