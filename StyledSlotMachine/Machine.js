class Machine extends React.Component {

  render() {
    const { s1, s2, s3 } = this.props; //Obj Destructuring ES6
    const winner = s1 === s2 && s1 === s3; //return a boolean value

    //use className not class to style a component
    //<span> tag are styled inline, take a look
    const spanStyle = { fontSize: '50px', background: '#fff', padding: '5px' };
    const pStyle = { fontSize: '20px', fontWeight: 'bold' };

    return (
      <div className="Machine">
        <span style={spanStyle}>{s1}</span>
        <span style={spanStyle}>{s2}</span>
        <span style={spanStyle}>{s3}</span>
        <p style={pStyle} className={winner ? 'win' : 'lose'} >
          {winner ? "YOU WIN !" : "Not Lucky! Try Again!"}
        </p>
      </div>
    );

  }
}