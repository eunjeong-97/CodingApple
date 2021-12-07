import React, { useState } from 'react';
import './App.css';

function App() {

  let [post, setPost] = useState('남자 코트 추천');
  let [글제목, 글제목변경] = useState(['남자 코드 추천', '강남 우동 맛집', '여자 코드 추천']);
  let [따봉수, 따봉수변경] = useState(0)

  // const post = '강남고기맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]} <span>👍🏻</span> {따봉수}
        </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>3월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>4월 28일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
