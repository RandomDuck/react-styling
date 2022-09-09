import { styled } from "@stitches/react"

export const Text = ({children, type})=>{
  return (
    <Paragrahp type={type}>{children}</Paragrahp>
  )
}

const Paragrahp = styled('p', {
  padding: 0,
  margin: 0,
  variants: {
    type: {
      artist: {
        fontSize: '20px'
      },
      song: {
        fontSize: '40px',
        fontWeight: 'bold'
      }
    }
  }
});