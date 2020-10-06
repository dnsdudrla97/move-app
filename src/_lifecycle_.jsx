import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("construcotr");
  }

  // Mutation Data
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
    // this.setState({ count: this.state.count + 1 });
    this.setState(crt => ({ count: crt.count + 1 }));
  };
  minus = () => {
    console.log("Minuis");
    // this.setState({ count: this.state.count - 1 })
    this.setState(crt => ({ count: crt.count - 1 }));
  };
  // render -> ____
  componentDidMount() {
    console.log("component rendered");
  }
  // state update -> state refresh -> render -> updated
  componentDidUpdate() {
    console.log("I did updated")
  }
  // component -> other component (call)
  componentWillUnmount() {
    console.log("unmount!!")
  }

  render() {
    console.log("I'm ready render");
    return (
      <div>
        <h1>class component {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }


}

export default App;
