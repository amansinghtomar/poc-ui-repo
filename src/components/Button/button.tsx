import React from 'react';
import { CustomButton } from './buttonStyle';


interface ButtonProps{
  label: String
  onClick?: () => void;
}

function Button(props:ButtonProps) {
  return (
    <div>
      <CustomButton onClick={props.onClick}>{props.label }</CustomButton>
    </div>
  )
}

export default Button
