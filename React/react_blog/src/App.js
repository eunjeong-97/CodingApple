import React, { useState } from 'react';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자코드 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉수, 따봉수변경] = useState(0);
  let [modal, modal변경] = useState(false);

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

      {글제목.map(function(a){
        return (
          <div className="list">
        <h3>
          {a} <button onClick={블로그제목변경}>글 제목 변경</button>
        </h3>
        <p>
          2월 17일 발행
          <span
            onClick={() => {
              따봉수변경(따봉수 + 1);
            }}
          >
            {' '}👍🏻
          </span>
          {따봉수}
        </p>
        <hr />
      </div>
        )
      })}
      <button onClick={() => { modal변경(!modal); }}>모달창 {modal ? 'off' : 'on'}</button>
      {modal && <Modal 글제목={글제목}></Modal>}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>제목: {props.글제목[0]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
