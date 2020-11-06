import styled from "styled-components";

import bgTriangle from "../../assets/bg-triangle.svg";

interface GameSectionProps {
  background: boolean;
}

export const Container = styled.main`
  margin: 0 auto;
  width: clamp(60rem, 50vw, 85rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GameSection = styled.section<GameSectionProps>`
  height: 45vh;
  width: clamp(46rem, 6vw, 70rem);
  margin: 0 auto;
  margin-top: 2rem;

  background: ${(props) =>
    props.background ? `url(${bgTriangle}) no-repeat center center` : "none"};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 17rem;
    height: 17rem;
    border-radius: 50%;
    cursor: pointer;

    transition: all 0.2s;

    &:hover {
      transform: translateY(1rem) translateX(-1rem);
    }
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 4rem;
  }
  span {
    width: 13rem;
    height: 13rem;
    background-color: #e8e8ec;
    border-radius: 50%;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2) inset;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Paper = styled.article`
  background: linear-gradient(135deg, hsl(230, 89%, 65%), hsl(230, 89%, 62%));

  box-shadow: inset 0 0 rgba(0, 0, 0, 0.2), 0 6px hsla(230, 89%, 65%, 0.7);
`;
export const Scissors = styled.article`
  background: linear-gradient(135deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%));

  box-shadow: inset 0 0 rgba(0, 0, 0, 0.2), 0 6px hsla(40, 84%, 53%, 0.7);
`;

export const Rock = styled.article`
  background: linear-gradient(135deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%));

  box-shadow: inset 0 0 rgba(0, 0, 0, 0.2), 0 6px hsla(349, 70%, 56%, 0.7);
`;
