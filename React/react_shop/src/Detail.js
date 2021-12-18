import React, {useState, useEffect} from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

import './Detail.scss';

const Box = styled.div`
  padding: 30px auto 0 auto;
`;

const Title = styled.h4`
  font-size: 25px;
  color: ${props => props.색상};
`;

const Detail = props => {
  const { shoes, shoes변경, 재고, 재고변경 } = props;
  let { id } = useParams();
  const history = useHistory();
  // eslint-disable-next-line eqeqeq
  let 찾은상품 = shoes.find((shoesItem) => shoesItem.id == id);

  /* == UI 만드는 방법
  1. UI 보이고 안보이는 상태를 state로 저장
  2. if문 등을 이용해 state가 true일 때만 보여준다

  */
  let [alert보여짐, alert보여짐변경] = useState(true);
  let [inputData, inputData변경] = useState("");

  /* === useEffect Hook ===
  1. 컴포넌트가 mount되었을 때
  useEffect(() => {실행할 코드})
  
  2. 컴포넌트가 update되었을 때
  useEffect(() => { return function 함수명() { 컴포넌트가 사라질 때 실행할 함수 } })

  3. 여러 개를 사용하고 싶다면 
  useEffect(()=>{});
  useEffect(()=>{}); 
  이런식으로 사용해도 된다

  4. 특정 state가 변경될 때만 실행하라
  useEffect(()=>{}, [state명. state2]); state여러개 가능
  useEffect(()=>{},[]); 업데이트될 때에는 실행이 안됨 (=처음에 나타날 때만 실행)
  */

  useEffect(() => {
    // 2초후에 alert창 안보이도록
    // 타이머함수는 보통 변수에 담아서 사용한다
    // eslint-disable-next-line no-unused-vars
    let 타이머 = setTimeout(() => {
      // alert창 보이지 않도록: 모달창 state 관련
      alert보여짐변경(false);
      return () => { clearTimeout(타이머); }
    }, 2000);
    // return function 함수명() { };
  },[]);

  useEffect(() => { 
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then(response => {
        shoes변경([...shoes, ...response.data]);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Detail">
      <Box>
        <Title 색상={"blue"} className="red">
          상세페이지
        </Title>
      </Box>
      {alert보여짐 && (
        <div className="alert">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      )}
      {/* if문을 통한 UI 생성 */}
      {/* {alert보여짐 === true ?
        (
        <div className="alert">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
        )
        : null} */}
      
      {/* 이러한 input에 뭔가 입력하면
      Detail 컴포넌트가 재렌더링된다 = 업데이트된다 */}
      {inputData}
      <input onChange={e => { inputData변경(e.target.value); }}/>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              찾은상품.id + 1
            }.jpg`}
            width="100%"
            alt="img"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <Info 재고={재고}/>
          <button className="btn btn-danger" onClick={() => {
            let new재고 = 재고;
            재고변경(new재고 - 1);
          }}>주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

const Info = props => {
  const { 재고 } = props;
  return (
      <p>재고: {재고}</p>
  );
}

export default Detail;
