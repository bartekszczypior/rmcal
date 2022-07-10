import React, { useState } from 'react'
import styled, {css} from 'styled-components'

const Header = styled.div`
width: 100%;
height: 70px;
background-color: transparent;
text-align: center;
color:${(props)=>props.theme.colors.onyx};
font-size: ${(props)=>props.theme.fontSizes.large};
font-weight: 900;
text-transform: uppercase;
`
const ButtonWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
`
const Button = styled.button`
background-color: ${(props)=>props.theme.colors.medBlue};
color: white;
text-transform: uppercase;
text-align: center;
font-weight: bold;
font-size:12px;
padding: 15px 30px;
min-width: 150px;
border: none;
border-radius: 20px;
margin:25px auto;
${props => props.close && css`
    background-color:${({theme})=>props.theme.colors.red};
    
    
  `}
  ${props => props.send && css`
    background-color:${({theme})=>props.theme.colors.darkGreen};
    
    
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
const ModalA =() => {
    const [weight,setWeight] = useState(0)
    const [dose,setDose] = useState(0)
    const [syringe,setSyringe] = useState(0)
    const [resultVisible, setResultVisible] = useState(false)
    const [modeA, setModeA] = useState(true)
    const [modeB, setModeB] = useState(false)

   const changeModeA =()=>{
setModeA(true)
setModeB(false)
   }
   const changeModeB =()=>{
    setModeA(false)
    setModeB(true)
       }
       const handleClear =()=>{
        setWeight(0)
        setDose(0)
        setResultVisible(false)
       }
  return (
    <>
    <Wrapper>
    {resultVisible ? <ResultWrapper>
        {modeA ? <p>Do strzykawki {syringe===50 ? "20" : "50"} ml naciągnij 1 mg adrenaliny. Przepływ na pompie infuzyjnej ustaw na {dose*60/syringe}/h
        </p> :
        <p>Do strzykawki {syringe===50 ? "20" : "50"} ml naciągnij 1 mg adrenaliny. Przepływ na pompie infuzyjnej ustaw na {dose*weight*60/syringe}/h
        </p>
        
        }
    <Button close onClick={()=>handleClear()}>Zmień wyniki</Button>
    </ResultWrapper> : 
    <> <Header>
    <p>adrenalina</p>
</Header>
<ButtonWrapper>
    <Button onClick={()=>changeModeA()}>bradykardia</Button>
    <Button onClick={()=>changeModeB()}>wstrząs</Button>
</ButtonWrapper>
{modeA ?
    <Dose>Dawak 2-10 mikrogram/min</Dose>:
    <Dose>Dawak 0.05-0.5 mikrogram/kg/min</Dose>
}

<MedInput type='number'onChange={(e)=>setDose(e.target.value)} placeholder='Podaj dawkę'/>
{modeB ?<MedInput type='number' onChange={(e)=>setWeight(e.target.value)} placeholder='Podaj wagę pacjenta'/> :''}
<Dose>Wybierz strzykawkę</Dose>
<ButtonWrapper>
    <Button onClick={()=>setSyringe(50)}>20 ml</Button>
    <Button onClick={()=>setSyringe(20)} >50 ml</Button>
</ButtonWrapper>{modeA ? dose &&syringe  > 0 ?  <Button send onClick={()=>setResultVisible(!resultVisible)}>Licz</Button> : '' :  dose && syringe && weight >0 ? <Button send onClick={()=>setResultVisible(!resultVisible)}>Licz</Button> : ''}

</>
    }
    </Wrapper>
   
    
    
    
    </>
   
  )
}

export default ModalA

