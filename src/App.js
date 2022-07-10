import React,{useState} from "react";
import GlobalStyle from "./theme/globalStyles";
import Theme from "./theme/Theme";
import styled from "styled-components";

import {ReactComponent as  HeadIcon} from './Assets/headIcon.svg';
import {ReactComponent as SyringeIcon} from './Assets/syringe.svg';
import {ReactComponent as Burn} from './Assets/burn.svg';
import {ReactComponent as Oxy} from './Assets/oxy.svg';
import {ReactComponent as Child} from './Assets/child.svg';
import {ReactComponent as Nose} from './Assets/nose.svg';
import ModalA from "./Components/ModalA";



const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
max-width: 1000px;
margin: 0 auto;
display: flex;
flex-direction: column;
background-color: ${(props)=>props.theme.colors.powderWhite};
overflow-x: hidden;
`
const Header = styled.div`
width: 100%;
height: 160px;
padding: 15px 25px;
border-bottom-left-radius: 80px;
border-bottom-right-radius: 80px;
display: flex;
justify-content: space-around;
font-size: ${(props)=>props.theme.fontSizes.small};
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

const CloseButton = styled.button`
min-width: 70px;
padding: 10px 20px;
background-color:red;
border:none;
border-radius:5px;
position: fixed;
bottom: 20px;
right: 40px;
color: wheat;
`


const  App = () => {
  const [modalA,setModalA] = useState(false)
  return (
   
    <Theme>
    <GlobalStyle/>
    {
      modalA ?
      <Wrapper>
        <CloseButton onClick={()=>setModalA(false)}>Wróc do panelu</CloseButton>
      <ModalA/>
     </Wrapper>
      :  
      <Wrapper>
      <Header>
        <h1>RMCAL</h1>
        <HeadIcon/>
      </Header>
      <PanelWrapper>
        <PanelItem onClick={()=>setModalA(!modalA)}>
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
    }
    
   
    </Theme>
    
    

  );
}

export default App;
