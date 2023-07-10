import styled from "styled-components";

export default function Header() {
    return (
        <HeaderElement>
            <Line>
                <svg width="30" height="1" viewBox="0 0 30 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="30" y2="0.5" width="30px" height="1px" stroke="var(--colorBlack)"/>
                </svg>
            </Line>
            <Title>
                THEMES
            </Title>
        </HeaderElement>
    )
}

const HeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding-top: 19px;
`;


const Line = styled.div`
  display: grid;
  place-items: center;
  
`;

const Title = styled.h1`
  font-family: var(--font2);
  font-weight: 300;
  display: flex;
  justify-content: center;
  color: var(--colorBlack);
  margin: 0;
`;