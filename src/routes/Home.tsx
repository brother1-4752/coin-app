import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
`;

const HomeTitle = styled.h1`
  padding-bottom: 20px;
  font-size: 35px;
  border-bottom: 1px solid ${(props) => props.theme.textColor};
`;
const CoinList = styled.ul`
  margin-top: 10px;
`;
const CoinListItem = styled.li`
  margin-bottom: 15px;
`;

const CoinLink = styled(Link)`
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.textColor};
  }
`;

interface ICoin {
  id: string;
  name: string;
  rank: number;
  symbol: string;
}

export default function Home() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 50));
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <HomeWrapper>
          <HomeTitle>🔵코인 랭킹🔵</HomeTitle>
          <CoinList>
            {coins.map((coin) => (
              <CoinListItem key={coin.rank}>
                <div>
                  {coin.rank}등 : {coin.name} &rarr;
                  <CoinLink to={`${coin.id}`}>{coin.symbol}</CoinLink>
                </div>
              </CoinListItem>
            ))}
          </CoinList>
        </HomeWrapper>
      )}
    </>
  );
}
