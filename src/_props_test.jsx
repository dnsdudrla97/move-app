import React from 'react';
import PropTypes from "prop-types"

const dynamicComponent = [
  {
    id: 1,
    name: "component1",
    image: "https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif",
    rating: 5
  },
  {
    id: 2,
    name: "component1_1",
    image: "https://media.giphy.com/media/11quO2C07Sh2oM/giphy.gif",
    rating: 3
  },
  {
    id: 3,
    name: "component1_2",
    image: "https://media.giphy.com/media/5Vy3WpDbXXMze/giphy.gif",
    rating: '2'
  },
  {
    id: 4,
    name: "component1_3",
    image: "https://media.giphy.com/media/Ifn0uK1HpgaWykIWVW/giphy.gif",
    rating: 1.2
  },
]

function Com1({ name, img, rating }) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={img} alt={name} />
    </div>
  );
}

Com1.protoTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.symbol
};


// function props
function App() {
  return (
    <div className="App">
      <h1>Dynamic Component</h1>
      {
        dynamicComponent.map(comp => (
          <Com1
            key={comp.id}
            name={comp.name}
            img={comp.image}
            rating={comp.rating}
          />
          // return <Com1 key={comp.id} name={comp.name} img={comp.image} rating={comp.rating}/>;
        ))}
    </div>

  );
}

export default App;
