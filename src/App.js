import React from 'react';

function Food(prop) {
  console.log(prop)
  return <h1 key={prop.fav}>I Like {prop.fav}</h1>
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

function renderFood(dish) {
  console.log(dish)
  return <Food key={dish.id} fav={dish.name} />
}



function App() {
  return (
    <div> 
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
