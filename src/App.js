import React from 'react';

function Food({ fav }) {
  console.log(fav)
  return <h1>I Like {fav}</h1>
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav="kimchi" />
      <Food fav="라면" /> 
      <Food fav="쭈꾸미" /> 
      <Food fav="고기" /> 
      <Food fav="김치찌개" /> 
    </div>
  );
}

export default App;
