function getMood() {
  const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
  return moods[Math.floor(Math.random() * moods.length)];
}

// to embed JS in JSX we need to use {}
class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Current Mood is: {getMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
