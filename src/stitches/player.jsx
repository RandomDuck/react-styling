import { styled } from '@stitches/react';
import { useRef, useState } from 'react';

export const Player = ({src, selected, setSelect, max}) => {
  const [play, setPlay] = useState(false);
  const audio = useRef();
  
  const togglePlay = () => {
    !play ? audio.current.play() : audio.current.pause();
    setPlay(!play)
  };

  const stepSong = (dir) => {
    if(selected + dir > max) {
      setSelect(0)
    } else if ( selected + dir < 0) {
      setSelect(max)
    } else {
      setSelect(selected+dir)
    }
  };

  return(
    <PaddedDiv>
      <audio src={src} ref={audio} />
      <PlayButton type='nav' onClick={()=>stepSong(-1)}>
        {"<<"}
      </PlayButton>
      <PlayButton type='play' onClick={togglePlay}>
        {play ? '||' : '>'}
      </PlayButton>
      <PlayButton type='nav' onClick={()=>stepSong(1)}>
        {">>"}
      </PlayButton>
    </PaddedDiv>
  )
}
const PaddedDiv = styled('div', {paddingTop: '20px'});

const PlayButton = styled('button',{
  borderRadius: "20px",
  '&:hover': {
    backgroundColor: "#888"
  },
  variants: {
    type: {
      nav: {
        padding:'10px'
      },
      play: {
        borderRadius: '100%',
        padding: '15px 20px'
      }
    }
  }
});