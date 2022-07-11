import React, { useState } from 'react'
import styled, {css} from 'styled-components'

const Header = styled.div`
width: 100%;
margin-bottom: 40px;
padding: 10px 0 ;
text-align: center;
color:${(props)=>props.theme.colors.onyx};
font-size: ${(props)=>props.theme.fontSizes.small};
font-weight: 900;
text-transform: uppercase;
@media (orientation:landscape){

}
`
const ButtonWrapper = styled.div`
width: 100%;
margin-bottom: 30px;
display: grid;
grid-template-columns: 1fr 1fr;

`
const Button = styled.button`
background-color: ${(props)=>props.theme.colors.medBlue};
color: white;
text-transform: uppercase;

font-weight: bold;
font-size:15px;
padding: 12px 20px;
min-width: 150px;
border: none;
border-radius: 20px;
margin:5px 10px;
${props => props.close && css`
    background-color:${({theme})=>props.theme.colors.red};
    
    
  `}
  ${props => props.send && css`
    background-color:${({theme})=>props.theme.colors.darkGreen};
    
    
  `}
  ${props => props.box && css`
    background-color:transparent;
    color:black;
    border-radius: 0;
    border: solid 2px black;
    
    
  `}

`
const Dose = styled.p`
font-size: ${(props)=>props.theme.fontSizes.xsmall};
margin: 20px 0;
text-align: center;
`

const MedInput = styled.input`
margin: 10px auto;
background-color:#C0CCF9 ;
font-size: ${(props)=>props.theme.fontSizes.xsmall};
padding: 12px 25px;
border: none;
border-radius: 22px;
width: 80%;
max-width: 500px;

`
const ResultWrapper =styled.div`
width: 100%;
height: 100vh;
background-color: ${(props)=>props.theme.colors.pouderWhite};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
font-size: ${(props)=>props.theme.fontSizes.medium};
font-weight: bold;
color:${(props)=>props.theme.colors.onyx};

`
const Wrapper = styled.div`
width: 100%;
height: 100vh;
padding: 0 25px;
display: flex;
flex-direction: column;

align-items: center;
`


const ModalB =() => {
const [modeA,setModeA] = useState(false)
const [modeB,setModeB] = useState(false)
  const [flow,setFlow] = useState(0)
  const [pressure,setPressure] = useState(0)
  const [capacity, setCapacity] = useState(0)

  const changeModeA = () =>{
    setModeA(true)
    setModeB(false)
  }
  
  const changeModeB = () =>{
    setModeA(false)
    setModeB(true)
  }

  const reset = () =>{
    setModeA(false)
    setModeB(false)
  }
  return (
    
    <>
    <Wrapper>
      <Header>
        <p>Ilość tlenu</p>
      </Header>
      {modeA ||modeB ? '':
      <>
    <Dose>Rodzaj Tlenoterapi</Dose>
      <ButtonWrapper>
        <Button onClick={()=>changeModeA()}>Bierna</Button>
        <Button onClick={()=>changeModeB()}>Respirator</Button>
      </ButtonWrapper>
      </>}
    
      {modeB ? <ButtonWrapper>
          <Button box>FiO2 =0.5</Button>
          <Button box>FiO2 =0.5</Button>
        </ButtonWrapper>:''}
      {modeA ? <MedInput placeholder='przepływ tlenu'  onChange={(e)=>setFlow(e.target.value)}/> : <ButtonWrapper><MedInput/><MedInput/></ButtonWrapper>  }
      
      <MedInput placeholder='ciśnienie w butli' onChange={(e)=>setPressure(e.target.value)} />
      <MedInput placeholder='pojemność butli'  onChange={(e)=>setCapacity(e.target.value)}/>
      <ButtonWrapper>
        <Button close onClick={()=>reset()}>RESETUJ</Button>
      <Button send>Licz</Button>
      </ButtonWrapper>
      {pressure}
    </Wrapper>
   
    </>
   
  )
}

export default ModalB

