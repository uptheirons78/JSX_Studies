class Machine extends React.Component {

  render() {
    const { s1, s2, s3 } = this.props; //Obj Destructuring ES6

    return (
      <div>
        <span>{s1}</span>
        <span>{s2}</span>
        <span>{s3}</span>
        <p>{s1 === s2 && s1 === s3 ? "YOU WIN !" : "Not Lucky! Try Again!"}</p>
      </div>
    );

  }
}