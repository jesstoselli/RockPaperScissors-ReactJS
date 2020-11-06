import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
    height: 100vh;
    background: radial-gradient(circle at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    color: #e8e8ec;
    -webkit-font-smoothing: antialiased;
}
 
body, input, button {
    font: 600 1.8rem/1 'Barlow Semi Condensed', sans-serif;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 700;
}

button {
    cursor: pointer;
}
`;
