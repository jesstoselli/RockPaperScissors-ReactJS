import styled from "styled-components";

export const Container = styled.button`
  & + button {
    margin-top: 1.6rem;
  }

  text-transform: uppercase;
  color: #e8e8ec;
  background-color: transparent;
  border: 1px solid #e8e8ec;
  border-radius: 1rem;
  padding: 1rem 2rem;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0) inset;

  transition: all 0.2s;

  &:hover {
    background-color: #e8e8ec;
    color: hsl(229, 25%, 31%);
    border-color: hsl(229, 25%, 31%);

    transform: translateY(0.25rem) translateX(-0.25rem);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2) inset;
  }
`;
