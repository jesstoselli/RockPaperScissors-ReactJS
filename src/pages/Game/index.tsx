import React, { useCallback, useState } from "react";
import Header from "../../components/Header";

// Images
import iconRock from "../../assets/icon-rock.svg";
import iconPaper from "../../assets/icon-paper.svg";
import iconScissors from "../../assets/icon-scissors.svg";

import { Container, GameSection, Paper, Scissors, Rock } from "./styles";
import Modal from "../../components/Modal";
import { useModal } from "../../hooks/modal";
import Backdrop from "../../components/Backdrop";
import StandardGameSet from "../StandardGameSet";

const Game: React.FC = () => {
  const { show, closeModal } = useModal();
  const [backgroundImage, setBackgroundImage] = useState(true);

  const [chosenOption, setChosenOption] = useState("");

  const handleClickOption = useCallback((option: string) => {
    setBackgroundImage(false);

    setChosenOption(option);
  }, []);

  return (
    <Container>
      <Header />
      <Backdrop show={show} closeModal={closeModal} />
      <Modal show={show} closeModal={closeModal} />
      <GameSection background={backgroundImage}>
        {chosenOption === "" ? (
          <>
            <div>
              <Paper onClick={() => handleClickOption("paper")}>
                <span>
                  <img src={iconPaper} alt='Paper' />
                </span>
              </Paper>
              <Scissors onClick={() => handleClickOption("scissors")}>
                <span>
                  <img src={iconScissors} alt='Scissors' />
                </span>
              </Scissors>
            </div>
            <Rock onClick={() => handleClickOption("rock")}>
              <span>
                <img src={iconRock} alt='Rock' />
              </span>
            </Rock>
          </>
        ) : (
          <StandardGameSet option={chosenOption} />
        )}
      </GameSection>
    </Container>
  );
};

export default Game;
