import React, { useCallback, useState } from "react";

// Images
// import iconRock from "../../assets/icon-rock.svg";
import iconPaper from "../../assets/icon-paper.svg";
import iconScissors from "../../assets/icon-scissors.svg";

import { Container, Option, BlankOption } from "./styles";

interface StandardGameSetProps {
  option: string;
}

const StandardGameSet: React.FC<StandardGameSetProps> = ({ option }) => {
  const [computerOption, setComputerOption] = useState("");

  console.log(option);

  const handleComputerOption = useCallback(() => {
    console.log("Computer option");
  }, []);

  return (
    <Container>
      <div>
        <h1>you picked</h1>
        <Option option={option}>
          <span>
            <img src={iconPaper} alt='Paper' />
          </span>
        </Option>
      </div>

      {computerOption === "" ? (
        <div>
          <h1>the house picked</h1>
          <BlankOption />
        </div>
      ) : (
        <div>
          <h1>the house picked</h1>
          <Option option={computerOption} onClick={handleComputerOption}>
            <span>
              <img src={iconScissors} alt='Scissors' />
            </span>
          </Option>
        </div>
      )}
    </Container>
  );
};

export default StandardGameSet;
