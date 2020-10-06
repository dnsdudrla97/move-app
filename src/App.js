import React from 'react';

function Com1({name}) {
  // console.log(props)
return <h1>{name}</h1>;
}

function App() {
  return (
    <div className="App">
      <h1>code</h1>
      <Com1 name="component1"/>
      <Com1 name="component1_1"/>
      <Com1 name="component1_2"/>
      <Com1 name="component1_3"/>
    </div>

  );
}

export default App;
