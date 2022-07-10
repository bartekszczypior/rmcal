import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700;800&display=swap');

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}



/* Set core body defaults */
body {
font-family: 'Montserrat', sans-serif;
font-size: 16px;
}




`;
 
export default GlobalStyle;