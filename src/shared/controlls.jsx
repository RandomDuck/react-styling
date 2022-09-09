import { styled } from "@stitches/react";
import { useState } from "react";

export const TopContainer = ({children}) => {
  return (
    <Div>{children}</Div>
  );
}

export const TopButton = ({click, text, startState = false, toggle = false}) => {
  const [clicked, setClicked] = useState(startState);
  const handleClick = () => {
    if (toggle) {
      setClicked(!clicked);
    }
    click()
  };

  return (
    <Button toggled={clicked ? 'active' : ''} onClick={handleClick}>{text}</Button>
  );
}

const Button = styled('button', {
  border: '2px solid black',
  color: '#ffffff',
  backgroundColor: '#009939',
  '&:hover': {
    backgroundColor: '#006626'
  },
  variants: {
    toggled: {
      active: {
        backgroundColor: '#006626',
        '&:hover': {
          backgroundColor: '#009939'
        }
      }
    }
  }
});

const Div = styled('div', {
  margin: 'auto',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0
});