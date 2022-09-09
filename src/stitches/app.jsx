import { styled } from '@stitches/react';
import { useState } from "react"
import { Album } from "./album"
import { Player } from "./player"
import { Text } from "./text"

const albumData = [
  {
    title: 'The kinslayer',
    artist: 'Nightwish',
    album: require('../resources/album1.jpg'),
    src: require('../resources/album1.mp3')
  },
  {
    title: 'Beliver',
    artist: 'Imagine dragons',
    album: require('../resources/album2.jpg'),
    src: require('../resources/album2.mp3')
  }
]

export const App = () => {
  const [selected, setSelected] = useState(0);
  return (
    <FlexDiv>
      <Album borderType={'rounded'} src={albumData[selected].album} />
      <Text type={'song'} >{albumData[selected].title}</Text>
      <Text type={'artist'} >{albumData[selected].artist}</Text>
      <Player src={albumData[selected].src} selected={selected} setSelect={setSelected} max={albumData.length-1}/>
    </FlexDiv>
  )
}

const FlexDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 0,
  alignItems:'center'
});