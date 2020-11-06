import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { useModal } from "../../hooks/modal";
import Button from "../Button";

import { Container, Buttons, Placard } from "./styles";

const Header: React.FC = () => {
  const history = useHistory();
  const { openModal } = useModal();

  const handleRulesClick = useCallback(() => {
    openModal();
  }, [openModal]);

  const handleGoToAdvancedGame = useCallback(() => {
    history.push("/advanced");
  }, [history]);

  return (
    <Container>
      <section>
        <h1>Rock Paper Scissors</h1>
        <div>
          <Buttons>
            <Button handleClick={handleRulesClick}>rules</Button>
            <Button handleClick={handleGoToAdvancedGame}>advanced</Button>
          </Buttons>
          <Placard>
            <p>score</p>
            <span>12</span>
          </Placard>
        </div>
      </section>
    </Container>
  );
};

export default Header;
