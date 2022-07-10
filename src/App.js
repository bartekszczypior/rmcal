import GlobalStyle from "./theme/globalStyles";
import Theme from "./theme/Theme";
import styled from "styled-components";

import {ReactComponent as  HeadIcon} from './Assets/headIcon.svg'
import {ReactComponent as SyringeIcon} from './Assets/syringe.svg'
import {ReactComponent as Burn} from './Assets/burn.svg'
import {ReactComponent as Oxy} from './Assets/oxy.svg'
import {ReactComponent as Child} from './Assets/child.svg'
import {ReactComponent as Nose} from './Assets/nose.svg'



const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
background-color: ${(props)=>props.theme.colors.powderWhite};
`
const Header = styled.div`
width: 100%;
height: 160px;
padding: 15px 25px;
border-bottom-left-radius: 80px;
border-bottom-right-radius: 80px;
display: flex;
justify-content: space-around;
font-size: ${(props)=>props.theme.fontSizes.medium};
font-weight: bold;
color:${(props)=>props.theme.colors.powderWhite};
letter-spacing: 5px;
background-color: ${(props) =>props.theme.colors.medBlue};
`

const PanelWrapper = styled.div`
width: 100%;
flex-grow: 1;
padding:60px 10px;
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(2, 1fr);
 

`
const PanelItem =styled.div`
border-radius: 25px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

&:nth-last-of-type(1){
  background-color: ${(props)=>props.theme.colors.red};
  grid-column-start: 1;
  grid-column-end: 3;
  
} 
&:nth-last-of-type(2){
  background-color: ${(props)=>props.theme.colors.violet};
  
} 
&:nth-last-of-type(3){
  background-color: ${(props)=>props.theme.colors.orange};
  
} 
&:nth-last-of-type(4){
  background-color: ${(props)=>props.theme.colors.lightBlue};
  
} 
&:nth-last-of-type(5){
  background-color: ${(props)=>props.theme.colors.darkGreen};
  
} 
p{
  font-size: ${(props)=>props.theme.fontSizes.small};
color:${(props) =>props.theme.colors.powderWhite};
font-size: ${(props)=>props.theme.fontSizes.xsmall};
text-transform: uppercase;
margin-top: 15px;
}

`



const  App = () => {
  return (
    
    <Theme>
    <GlobalStyle/>
      <Wrapper>
        <Header>
          <h1>RMCAL</h1>
          <HeadIcon/>
        </Header>
        <PanelWrapper>
          <PanelItem>
            <SyringeIcon/>
            <p>Leki w pompie</p>
          </PanelItem>

          <PanelItem>
            <Oxy/>
            <p>ilość tlenu</p>
          </PanelItem>

          <PanelItem>
            <Burn/>
            <p>oparzenia</p>
          </PanelItem>
            
          <PanelItem>
          <Child/>
          <p>dzieci</p>
          </PanelItem>
          <PanelItem>
            <Nose/>
            <p>leki donosowo</p>
          </PanelItem>
         
        </PanelWrapper>
      </Wrapper>
    </Theme>
    
    

  );
}

export default App;
