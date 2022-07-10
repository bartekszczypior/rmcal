import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
      powderWhite: "#FFFDF9",
      darkGreen: "#3A7D44",
      medBlue: "#13A4F6",
      lightBlue:'#A7ACD9',
      orange:'#DD6031',
      violet:'#483A58',
     red: "#A52422",
     onyx:"#4D4D4A"
    },
   
    fontSizes: {
     xsmall: "1rem",
      small: "1.5rem",
      medium: "1.8rem",
      large: "2rem",
      xlarge: "2.5rem"
    }
  }

  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;