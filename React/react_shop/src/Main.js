import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Jumbotron from "./Jumbotron";

const Main = props => {
  const { shoes, shoes변경 } = props;
  let [로딩화면보여짐, 로딩화면보여짐변경] = useState(false);

  useEffect(() => {
    로딩화면보여짐변경(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Main">
      <Jumbotron />
      {/* axios.post('서버URL', { id: 'codingApple', pw: 1234 }); */}
      <div className="container">
        <div className="row">
          {shoes.map((shoesItem, shoesIndex) => {
            return <Product shoesItem={shoesItem} key={shoesIndex} />;
          })}
        </div>
        {로딩화면보여짐 && <div>로딩중...!</div>}
      </div>
      <button className='btn btn-primary' onClick={() => {
        로딩화면보여짐변경(true);
        axios
          .get("https://codingapple1.github.io/shop/data2.json")
          .then(response => {
            로딩화면보여짐변경(false);
            // let newShoes = [...shoes];
            // newShoes.push(...response.data);
            // shoes변경(newShoes);
            shoes변경([...shoes, ...response.data]); // 정답
          })
          .catch(() => {
            로딩화면보여짐변경(false);
            console.log("통신실패");
          })
        // fetch("https://codingapple1.github.io/shop/data2.json")
        //   .then(response => {
        //     console.log(response.data);
        //     오브젝트로 변경해줘야 한다
        // })
      }}>더보기</button>
    </div>
  );
};

const Product = (props) => {
  const { shoesItem } = props;
  return (
    
    <div className="col-md-4">
      <Link to={`/detail/${shoesItem.id}`}>
        <img
          src={`https://codingapple1.github.io/shop/shoes${
            shoesItem.id + 1
          }.jpg`}
          width="100%"
          alt="img"
      />
      </Link>
        <h4>{shoesItem.title}</h4>
        <p>
          {shoesItem.content} & {shoesItem.price}
        </p>
      </div>
    
  );
};

export default Main;
