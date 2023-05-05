import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { coinDetailState } from "../atoms";

const CoinWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 550px;
`;

const HomeLink = styled(Link)`
  padding: 10px;
  border-radius: 10px;
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
  background-color: #ff6969;
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

const CoinDescription = styled.section`
  margin: 30px 0;
`;

interface ILogo {
  src: string;
}

const CoinLogo = styled.div<ILogo>`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  zoom: 0.5;
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
      setCoinDetail(json);
    })();
  }, []);
  return (
    <CoinWrapper>
      <CoinHeader>
        <HomeLink className="" to="/">
          ◀Home
        </HomeLink>
        <CoinTitle>{coinId}</CoinTitle>
      </CoinHeader>
      <CoinDescription>
        <CoinLogo src={coinDetail?.logo} />
      </CoinDescription>
    </CoinWrapper>
  );
}

export default Coin;
