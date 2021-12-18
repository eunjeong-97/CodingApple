import React, { useState } from "react";
import { Route } from "react-router-dom";

import NavbarBox from "./NavbarBox";
import Main from "./Main";
import Detail from "./Detail";
import Data from "./data";
import './App.css';

const App = () => {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState(10, 11, 12);

  return (
    <div className="App">
      <NavbarBox />
      <Route exact path="/">
        <Main shoes={shoes} shoes변경={shoes변경} />
      </Route>
      <Route exact path="/detail/:id">
        <Detail
          shoes={shoes}
          shoes변경={shoes변경}
          재고={재고}
          재고변경={재고변경}
        />
      </Route>
    </div>
  );
};

export default App;

/* === Ajax ===
서버에 <새로고침없이> 요청을 할 수 있게 도와주는 일종의 기술
원래 브라우저에서 서버에 요청을 받으면 새로고침이 되지만 Ajax는 새로고침을 하지 않는다
서버
1. 누군가 페이지 요청을 하면 페이지를 갖다주는 프로그램
2. 주소창에 url을 입력하면 서버에 요청해서 해당 페이지를 가져온 것이다.

요청하는 방법
1. GET요청: 주소창에 URL 때려박는 요청: 특정페이지 및 자료읽기
2. POST요청: 서버로 중요정보 전달, 전송버튼을 눌러서 숨겨서

1. jQuery $.ajax()
2. axios axios.get()
3. 쌩자바스크립트 fetch()
*/
