import React from 'react';

function Com1({ name, img }) {
  // console.log(props)
  return (
    <div>
      <h2>{name}</h2>
      <img src={img}/>

    </div>
    


  )
}

const dynamicComponent = [
  {
    name: "component1",
    image: "https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif"
  },
  {
    name: "component1_1",
    image: "https://media.giphy.com/media/11quO2C07Sh2oM/giphy.gif"
  },
  {
    name: "component1_2",
    image: "https://media.giphy.com/media/5Vy3WpDbXXMze/giphy.gif"
  },
  {
    name: "component1_3",
    image: "https://media.giphy.com/media/Ifn0uK1HpgaWykIWVW/giphy.gif"
  },
]


function App() {
  return (
    <div className="App">
      <h1>Dynamic Component</h1>
      {
        dynamicComponent.map(comp =>
          <Com1
            name={comp.name}
            img={comp.image}
          />
        )
      }
    </div>

  );
}

export default App;
