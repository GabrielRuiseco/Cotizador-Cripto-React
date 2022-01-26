import styled from "@emotion/styled";

const Content = styled.div`
  color: #fff;
  font-family: "lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Text = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Price = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Image = styled.img`
  display: block;
  width: 150px;
`;

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;
  return (
    <Content>
      <Image src={`https://www.cryptocompare.com/${IMAGEURL}`} />
      <div>
        <Price>
          El precio es de: <span>{PRICE}</span>
        </Price>
        <Text>
          Precio mas alto del día: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Precio mas bajo del día: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Ultima actualización: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Content>
  );
};

export default Result;
