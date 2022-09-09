import { styled } from '@stitches/react';

export const Album = ({src, borderType})=>{
  return (
    <Img border={borderType} alt='album art' src={src}/>
  )
}

const Img = styled('img',{
  marginTop: '10%',
  marginBottom: '10px',
  width: '30%',
  height: '30%',
  variants: {
    border: {
      rounded:{ 
        borderRadius: '20%'
      },
      round:{ 
        borderRadius: '100%'
      }
    }
  }
})