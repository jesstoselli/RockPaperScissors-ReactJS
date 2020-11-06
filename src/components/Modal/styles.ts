import styled from "styled-components";

interface ButtonStyleProps {
  show: boolean;
}

export const Container = styled.article<ButtonStyleProps>`
  margin: 0 auto;

  position: fixed;
  z-index: 50;

  > div {
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #e8e8ec;
    border-radius: 10px;
    width: clamp(40rem, 8vw, 70rem);
    height: 40vh;
    padding: 3rem;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;

      color: hsl(229, 25%, 31%);

      margin-bottom: 2rem;

      svg {
        cursor: pointer;
      }
    }
  }
`;
