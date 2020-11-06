import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10vh;
  margin: 4rem auto 10rem;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 2.5rem;

    border: 3px solid hsl(217, 16%, 45%);
    border-radius: 1rem;

    h1 {
      font-size: 4rem;
      text-transform: uppercase;
      line-height: 3.2rem;
      width: 5vw;
    }

    > div {
      display: flex;
      align-items: center;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-right: 3.2rem;
`;

export const Placard = styled.div`
  text-align: center;
  background-color: #fdfdfd;

  padding: 1rem 4rem;
  border-radius: 1rem;
  border: 2px solid transparent;

  p {
    color: hsl(229, 64%, 46%);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 1.5rem;
  }

  span {
    color: hsl(229, 25%, 31%);
    font-size: 6rem;
    font-weight: 700;
  }

  transition: all 0.2s;

  &:hover {
    border-color: hsl(217, 16%, 45%);
  }
`;
