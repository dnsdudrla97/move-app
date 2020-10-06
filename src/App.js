import React from 'react';

class App extends React.Component {
  // Mutation Data
  state = {
    count: 0
  };
  
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("Minuis");
  };

  render() {
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
