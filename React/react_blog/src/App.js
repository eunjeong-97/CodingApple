import React from 'react';
import './App.css';

function App() {
  const posts = '강남고기맛집';
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <h4>{posts}</h4>
    </div>
  );
}

export default App;
