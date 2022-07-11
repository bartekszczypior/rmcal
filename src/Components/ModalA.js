import React, { useState } from 'react'
import styled, {css} from 'styled-components'

const Header = styled.div`
width: 100%;
margin-bottom: 85px;
background-color: transparent;
text-align: center;
color:${(props)=>props.theme.colors.onyx};
font-size: ${(props)=>props.theme.fontSizes.small};
font-weight: 900;
text-transform: uppercase;
@media (orientation:landscape){
margin-bottom: 5px;
}
`
const ButtonWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;


`
const Button = styled.button`
background-color: ${(props)=>props.theme.colors.medBlue};
color: white;
text-transform: uppercase;
text-align: center;
font-weight: bold;
font-size:12px;
padding: 13px 30px;
min-width: 150px;
border: none;
border-radius: 20px;
margin:5px auto;
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
    const [weight,setWeight] = useState(null)
    const [dose,setDose] = useState(null)
    const [syringe,setSyringe] = useState(null)
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
        setWeight('')
        setDose('')
        setSyringe('')
        setResultVisible(false)
       }

      const handleReset = (e) => {
       
        setWeight('')
        setDose('')
        setSyringe('')
      }
  return (
    <>
    <Wrapper>
    {resultVisible ? <ResultWrapper>
        {modeA ? <p>Do strzykawki {syringe===50 ? "20" : "50"} ml naciągnij 1 mg adrenaliny. Przepływ na pompie infuzyjnej ustaw na {dose*60/syringe}ml/h
        </p> :
        <p>Do strzykawki {syringe===50 ? "20" : "50"} ml naciągnij 1 mg adrenaliny. Przepływ na pompie infuzyjnej ustaw na {dose*weight*60/syringe}ml/h
        </p>
        
        }
    <Button close onClick={()=>handleClear()}>Zamknij</Button>
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

<MedInput value={dose}  type='number'onChange={(e)=>setDose(e.target.value)} placeholder='Podaj dawkę'/>
{modeB ?<MedInput value={weight} type='number' onChange={(e)=>setWeight(e.target.value)} placeholder='Podaj wagę pacjenta'/> :''}
<Dose>Wybierz strzykawkę</Dose>

<ButtonWrapper>
{modeA ? dose &&syringe  > 0 ? 
<>
<Button close onClick={()=>handleReset()}>Resetuj</Button>
<Button send onClick={()=>setResultVisible(!resultVisible)}>Licz</Button>
</>
   : 
<>
<Button onClick={()=>setSyringe(50)}>20 ml</Button>
<Button onClick={()=>setSyringe(20)} >50 ml</Button>
</>

 :  dose && syringe && weight >0 ? 
 <>
<Button close onClick={()=>handleReset()}>Resetuj</Button>
<Button send onClick={()=>setResultVisible(!resultVisible)}>Licz</Button>
</> :
 <>
 <Button onClick={()=>setSyringe(50)}>20 ml</Button>
 <Button onClick={()=>setSyringe(20)} >50 ml</Button>
 </>
  }

</ButtonWrapper>

</>
    }
    </Wrapper>
   
    </>
   
  )
}

export default ModalA

