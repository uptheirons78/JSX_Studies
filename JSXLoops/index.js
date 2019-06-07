class App extends React.Component {
  render() {
    return (
      <div>
        <Friend
          name="Darth Vader"
          hobbies={['Dark Side', 'Light Saber Training', 'Choking people with The Force']}
        />
        <Friend
          name="Yoda"
          hobbies={['Flying things with The Force', 'Train Jedies', 'Speaking well']}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));