const slotFields = ["🍇", "🍌", "🍒"];

//a simple function to randomly return a slotField from the slotFields array
function poss(arr) {
  const n = Math.floor(Math.random() * arr.length);
  return arr[n];
}

class App extends React.Component {


  render() {
    return ( //it render an App with three Machine components and their props

      <div>
        <h1>Slot Machine</h1>
        <Machine s1={poss(slotFields)} s2={poss(slotFields)} s3={poss(slotFields)} />
        <Machine s1={poss(slotFields)} s2={poss(slotFields)} s3={poss(slotFields)} />
        <Machine s1={poss(slotFields)} s2={poss(slotFields)} s3={poss(slotFields)} />
      </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));