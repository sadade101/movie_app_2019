import React from 'react';

function Food({ fav }) {
  console.log(fav)
  return <h1>I Like {fav}</h1>
}

const foodILike = ["라면", "쭈꾸미", "고기"]

function App() {
  return (
    <div>
      {foodILike.map(food => {
        return <Food fav={food}/> 
      })};
    </div>
  );
}

export default App;
