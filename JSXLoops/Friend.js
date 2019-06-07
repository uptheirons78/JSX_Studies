class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    //to loop over an array it is possible to use map();
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map(h => <li>{h}</li>)}
        </ul>
      </div>
    );
  }
}