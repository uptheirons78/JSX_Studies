class Hello extends React.Component {

  //this is the way to set Default Props on a component
  static defaultProps = {
    from: 'Anonymous',
    bangs: 1
  }

  render() {
    const { to, from, bangs } = this.props; //Obj Destructuring ES6
    const numOfBangs = "!".repeat(bangs);

    return (
      <div>
        <p>
          Hi {to} from {from} {numOfBangs}
        </p>
      </div>
    );

  }
}
