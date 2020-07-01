import React from 'react';
import PropTypes from 'prop-types'

function Food({name}) {
  return <h1>I Like {name}</h1>
}

const foodILike = [
  {
    id : 1,
    name : "라면"
  },
  {
    id : 2,
    name : "쭈꾸미"
  },
  {
    id : 3,
    name : "고기"
  }
]

Food.propTypes = {
  name: PropTypes.string
};

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} />
}

function App() {
  return (
    <div> 
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
