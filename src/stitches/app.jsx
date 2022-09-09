import { dark, styled } from "./stitch"
import { useState } from "react"
import { Album } from "./album"
import { Player } from "./player"
import { Text } from "./text"
import { albumData } from '../shared/data';

import { TopContainer, TopButton } from '../shared/controlls'


export const App = () => {
  const [selected, setSelected] = useState(0);
  const [theme, setTheme] = useState(false);
  const [rounding, setRounding] = useState(true);
  return (
    <Background className={theme ? dark : ''}>
      <TopContainer>
        <TopButton toggle={true} text={ theme ? 'Day theme' : 'Night theme' } click={()=>{
          setTheme(!theme);
        }} />
        <TopButton toggle={true} text={ rounding ? 'Circle album' : 'Round album' } click={()=>{
          setRounding(!rounding);
        }} />
      </TopContainer>
      <FlexDiv>
        <Album borderType={rounding ? 'rounded' : 'round'} src={albumData[selected].album} />
        <Text type={'song'} >{albumData[selected].title}</Text>
        <Text type={'artist'} >{albumData[selected].artist}</Text>
        <Player src={albumData[selected].src} selected={selected} setSelect={setSelected} max={albumData.length-1}/>
      </FlexDiv>
    </Background>
  )
}

const Background = styled('div', {
  backgroundColor: '$background',
  color: '$textColor',
  margin: '-9px',
  height: '100vh',
  width: '100.05vw'
});

const FlexDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 0,
  alignItems:'center'
});