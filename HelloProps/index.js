class App extends React.Component {
  render() {
    //it is possible to pass different kind of data in props
    return (
      <div>
        <Hello
          to="Darth"
          from="Luke"
          bangs={12}
          img="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
