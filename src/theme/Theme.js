import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
      powderWhite: "#FFFDF9",
      darkGreen: "#3A7D44",
      medBlue: "#13A4F6",
      lightBlue:'#A7ACD9',
      orange:'#DD6031',
      violet:'#483A58',
     red: "#A52422"
    },
   
    fontSizes: {
     xsmall: "1em",
      small: "1.5em",
      medium: "1.8em",
      large: "2em",
      xlarge: "2.5em"
    }
  }

  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;