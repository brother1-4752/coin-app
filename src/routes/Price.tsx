import { useQuery } from "@tanstack/react-query";
import { fetchCoinTickers } from "../api";
import { useParams } from "react-router-dom";
import { PriceData } from "../atoms";
import styled from "styled-components";

const PriceWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
const PriceBox = styled.div`
  width: 40%;
  margin: 15px 10px;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  border-radius: 15px;
  line-height: 50px;
  text-align: center;
`;

const PriceHeader = styled.h1`
  width: 100%;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
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
            <PriceHeader>Market Cap</PriceHeader>
            <p>{data?.quotes.USD.market_cap}</p>
          </PriceBox>
          <PriceBox>
            <PriceHeader>현재 가격(USD | KRW)</PriceHeader>
            <p>
              {data && data.quotes.USD.price.toFixed(0)}USD
              <hr />
              {data && (data.quotes.USD.price * 1330).toFixed(0)}KRW
            </p>
          </PriceBox>
          <PriceBox>
            <PriceHeader>1시간 동안의 변화</PriceHeader>
            <p>{data?.quotes.USD.percent_change_1h}%</p>
          </PriceBox>
          <PriceBox>
            <PriceHeader>6시간 동안의 변화</PriceHeader>
            <p>{data?.quotes.USD.percent_change_6h}%</p>
          </PriceBox>
          <PriceBox>
            <PriceHeader>12시간 동안의 변화</PriceHeader>
            <p>{data?.quotes.USD.percent_change_12h}%</p>
          </PriceBox>
          <PriceBox>
            <PriceHeader>24시간 동안의 변화</PriceHeader>
            <p>{data?.quotes.USD.percent_change_24h}%</p>
          </PriceBox>
        </PriceWrapper>
      )}
    </>
  );
}
