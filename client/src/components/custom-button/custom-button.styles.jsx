import styled, { css } from 'styled-components'


function getButtonStyles(props) {
  if (props.googleSignIn) {
    return googleSignInButtonStyles
  }

  return props.inverted ? invertedButtonStyles : buttonStyles
}


const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }

`

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;
    
    &:hover{
        background-color: black;
        color: white;
        border: none;
    }
`

const googleSignInButtonStyles = css`
    background-color: #4285f4;
    color: white;
    &:hover{
        background-color: #226ce4;
        border: none;
    }
`


export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    
    cursor: pointer;
    box-shadow: 0 3px 3px rgba(#000, .25);
    transition: all 150ms ease;
    display: flex;
    justify-content: center;
   
    &:active{
        box-shadow: 0;
        transform: translatey(2px);
    }
    ${getButtonStyles}
`
