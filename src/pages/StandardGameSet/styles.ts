import styled from "styled-components";

interface OptionProps {
  option: string;
}

export const Container = styled.section`
  display: flex;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-transform: uppercase;
      margin-bottom: 3rem;
    }
  }
`;

export const BlankOption = styled.div`
  width: 17rem;
  height: 17rem;
  border-radius: 50%;
  background-color: #17223f;
`;

const optionBackground = {
  paper: "linear-gradient(135deg, hsl(230, 89%, 65%), hsl(230, 89%, 62%))",
  scissors: "linear-gradient(135deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%));",
  rock: "linear-gradient(135deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
};

const optionBoxShadow = {
  paper: "inset 0 0 rgba(0, 0, 0, 0.2), 0 6px hsla(230, 89%, 65%, 0.7);",
  scissors: "inset 0 0 rgba(0, 0, 0, 0.2), 0 6px hsla(40, 84%, 53%, 0.7);",
  rock: "inset 0 0 rgba(0, 0, 0, 0.2), 0 6px hsla(349, 70%, 56%, 0.7);",
};

export const Option = styled.div<OptionProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 26rem;
  height: 26rem;
  border-radius: 50%;
  background: ${(props) =>
    props.option === "paper"
      ? optionBackground.paper
      : props.option === "scissors"
      ? optionBackground.scissors
      : optionBackground.rock};

  box-shadow: ${(props) =>
    props.option === "paper"
      ? optionBoxShadow.paper
      : props.option === "scissors"
      ? optionBoxShadow.scissors
      : optionBoxShadow.rock};

  span {
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    background-color: #e8e8ec;
    box-shadow: 0px 16px 0px rgba(0, 0, 0, 0.2) inset;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 9rem;
    }
  }
`;
