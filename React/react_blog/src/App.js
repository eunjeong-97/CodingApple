import React, { useState } from 'react';
import './App.css';

function App() {

  let [post, setPost] = useState('남자코트 추천');
  let [글제목, 글제목변경] = useState(['남자코드 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉수, 따봉수변경] = useState(0);

  function 블로그제목변경() {
    // let newArray = 글제목; 얕은복사를 하게 됨
    let newArray = [...글제목]; // 깊은복사
    newArray[0] = '여자코드 추천';
    글제목변경(newArray);
  }

  function 오름차순정렬() {
    let newArray = [...글제목];
    newArray.sort();
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>
          개발 Blog <button onClick={오름차순정렬}>오름차순정렬</button>
        </div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]} <button onClick={블로그제목변경}>글 제목 변경</button>
        </h3>
        <p>
          2월 17일 발행{" "}
          <span
            onClick={() => {
              따봉수변경(따봉수 + 1);
            }}
          >
            👍🏻
          </span>{" "}
          {따봉수}
        </p>
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
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
