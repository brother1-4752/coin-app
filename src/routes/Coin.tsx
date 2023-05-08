import { useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { coinDetailState } from "../atoms";
import Chart from "./Chart";
import Price from "./Price";

const CoinWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 650px;
`;

const HomeLink = styled(Link)`
  padding: 10px 5px;
  border-radius: 10px;
  font-size: 14px;
  &:hover {
    background-color: ${(props) => props.theme.bgColor};
    -webkit-animation: jello-horizontal 0.9s both;
    animation: jello-horizontal 0.9s both;
  }
`;

const CoinHeader = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgb(0, 117, 186);
  border-radius: 1em;

  & > a {
    position: absolute;
    width: 60px;
    top: 5px;
    left: 5px;
    text-align: center;
  }
`;

const CoinTitle = styled.h1`
  font-size: 25px;
`;

const CoinDetail = styled.section`
  margin: 30px 0;
  display: flex;
  padding: 20px 10px;
  border-radius: 15px;
  border: 3px solid ${(props) => props.theme.accecntColor};
`;

const CoinLogo = styled.img`
  &:hover {
    //코인 회전하는 애니메이션
  }
`;

const CoinDescription = styled.section`
  h3,
  p {
    margin-top: 15px;
  }
  div {
    margin-top: 10px;
    text-decoration: underline;
    line-height: 1.2;
  }
`;

function Coin() {
  const { coinId } = useParams();
  const [coinDetail, setCoinDetail] = useRecoilState(coinDetailState);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      const json = await response.json();
      setCoinDetail(() => [json]);
      console.dir(coinDetail);
    })();
  }, [coinId]);
  return (
    <>
      <CoinWrapper>
        <CoinHeader>
          <HomeLink className="" to="/">
            ◀Home
          </HomeLink>
          <CoinTitle>{coinDetail[0]?.name}</CoinTitle>
        </CoinHeader>
        {coinDetail?.map((coin) => (
          <CoinDetail key={coin?.id}>
            <CoinLogo
              src={coin.logo}
              style={{ width: "100px", height: "100px", marginRight: "30px" }}
            />
            <CoinDescription>
              <h1>🚩랭킹 : {coin.rank}</h1>
              <h3>💥코인명 : {coin.name}</h3>
              <p>
                💭 코인 설명
                <br />
                <div>{coin.description}</div>
              </p>
            </CoinDescription>
          </CoinDetail>
        ))}
      </CoinWrapper>
      <Link to={`/${coinId}/chart`}>d</Link>
      <Routes>
        <Route path={`/${coinId}/chart`} element={<Chart />} />
        <Route path={`/${coinId}/price`} element={<Price />} />
      </Routes>
    </>
  );
}

export default Coin;
