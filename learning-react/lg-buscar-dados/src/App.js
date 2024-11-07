import './App.css';
import React ,{ useState } from 'react';

function App() {

  const { posts} = useState({
    posts: 0
})
  return (
    <div className="App">
      <h1>ola,{posts}</h1>
    </div>
  );
}

export default App;
