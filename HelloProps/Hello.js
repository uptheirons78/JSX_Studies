//Remember "props" are Immutable
class Hello extends React.Component {
  render() {
    //this.props.to & this.props.from
    const { to, from, bangs, img } = this.props; //Obj Destructuring ES6
    const numOfBangs = "!".repeat(bangs);
    return (
      <div>
        <p>
          Hi {to} from {from} {numOfBangs}
        </p>
        <img src={img} />
      </div>
    );
  }
}
