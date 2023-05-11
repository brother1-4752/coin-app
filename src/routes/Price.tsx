import { useQuery } from "@tanstack/react-query";
import { fetchCoinTickers } from "../api";
import { useParams } from "react-router-dom";
import { PriceData } from "../atoms";
import styled from "styled-components";

const PriceWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
`;
const PriceBox = styled.div`
  width: 200px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 15px;
`;

export default function Price() {
  const { coinId } = useParams() as { coinId: string };
  const { isLoading, data } = useQuery<PriceData>({
    queryKey: ["priceTap", coinId],
    queryFn: () => fetchCoinTickers(coinId),
  });

  return (
    <>
      {isLoading ? (
        "price loading..."
      ) : (
        <PriceWrapper>
          <PriceBox>
            <h1>Market Cap</h1>
            <p>{data?.quotes.USD.market_cap}</p>
          </PriceBox>
          <PriceBox>
            <h1>현재 가격(USD | KRW)</h1>
            <p>
              {data && data.quotes.USD.price.toFixed(0)}USD
              <br />
              {data && (data.quotes.USD.price * 1330).toFixed(0)}KRW
            </p>
          </PriceBox>
          <PriceBox>
            <h1>1시간 동안의 변화</h1>
            <p>{data?.quotes.USD.percent_change_1h}%</p>
          </PriceBox>
          <PriceBox>
            <h1>6시간 동안의 변화</h1>
            <p>{data?.quotes.USD.percent_change_6h}%</p>
          </PriceBox>
          <PriceBox>
            <h1>12시간 동안의 변화</h1>
            <p>{data?.quotes.USD.percent_change_12h}%</p>
          </PriceBox>
          <PriceBox>
            <h1>24시간 동안의 변화</h1>
            <p>{data?.quotes.USD.percent_change_24h}%</p>
          </PriceBox>
        </PriceWrapper>
      )}
    </>
  );
}
