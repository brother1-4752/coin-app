import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";

const HomeWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const HomeTitle = styled.h1`
  position: fixed;
  left: 20px;
  top: 18px;
`;

const CoinLink = styled(Link)`
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.textColor};
  }
`;

const MainTitle = styled.h1`
  width: 60%;
  font-size: 24px;
  font-weight: bold;
  background-color: rgba(0, 117, 186, 0.8);
  padding: 20px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  text-align: center;
  margin-bottom: 30px;
`;

const MainTable = styled.table`
  width: 60%;
`;

const TableHeader = styled.thead`
  width: 100%;
  height: 30px;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  border-radius: 8px;
  line-height: 50px;
  text-align: center;
`;

const TableBody = styled.tbody`
  width: 60%;
  margin-top: 10px;
`;

const TableMargin = styled.tr<{ value: number }>`
  height: ${(props) => `${props.value}px`};
`;

const TableRow = styled.tr`
  height: 30px;
  text-align: center;
  line-height: 45px;
  text-align: center;
  cursor: pointer;

  &:hover {
    border-radius: 8px;
    box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  }
`;

const SymbolText = styled.span`
  color: #8a8989;
  zoom: 0.6;
`;

interface ICoin {
  id: string;
  name: string;
  rank: number;
  symbol: string;
}

export default function Home() {
  //react-query
  const { isLoading, data } = useQuery<ICoin[], Error>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });

  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <HomeTitle>Coin Observer 🔍</HomeTitle>
          <HomeWrapper>
            <MainTitle>
              <span>Today's Top 50 Virtual Assets By Market Cap 📢</span>
            </MainTitle>
            <MainTable>
              <colgroup>
                <col style={{ width: "30px" }}></col>
                <col style={{ width: "100px" }}></col>
                <col style={{ width: "200px" }}></col>
              </colgroup>

              <TableHeader>
                <TableRow>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>See More</th>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableMargin value={20} />

                {data?.slice(0, 50)?.map((coin) => (
                  <TableRow key={coin.id}>
                    <td>{coin.rank}</td>
                    <td>
                      {coin.name} <SymbolText>{coin.symbol}</SymbolText>
                    </td>
                    <td>
                      <CoinLink to={`${coin.id}`}>&rarr;</CoinLink>
                    </td>
                  </TableRow>
                ))}
              </TableBody>
            </MainTable>
          </HomeWrapper>
        </>
      )}
    </>
  );
}
