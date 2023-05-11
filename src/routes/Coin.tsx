import { Routes, Route, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import { useQuery } from "@tanstack/react-query";
import { ICoinDetail } from "../atoms";

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
    -webkit-animation: rotate-in-center 0.6s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: rotate-in-center 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
  const { coinId } = useParams() as { coinId: string };

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    data: coinInfo,
  } = useQuery<ICoinDetail, Error>({
    queryKey: ["info", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <CoinWrapper>
          <CoinHeader>
            <HomeLink className="" to="/">
              ◀Home
            </HomeLink>
            <CoinTitle>{coinId}</CoinTitle>
          </CoinHeader>

          {isSuccess ? (
            <CoinDetail key={coinInfo?.id}>
              <CoinLogo
                src={coinInfo?.logo}
                style={{ width: "100px", height: "100px", marginRight: "30px" }}
              />
              <CoinDescription>
                <h1>🚩랭킹 : {coinInfo?.rank}</h1>
                <h3>💥코인명 : {coinInfo?.name}</h3>
                <div>
                  💭 코인 설명
                  <br />
                  <div>{coinInfo?.description}</div>
                </div>
              </CoinDescription>
            </CoinDetail>
          ) : null}

          <Link to={`/${coinId}/chart`}>Charttt</Link>
          <Link to={`/${coinId}/price`}>Priceee</Link>

          <Routes>
            <Route path={`chart`} element={<Chart />} />
            <Route path={`price`} element={<Price />} />
          </Routes>
        </CoinWrapper>
      )}
    </>
  );
}

export default Coin;
