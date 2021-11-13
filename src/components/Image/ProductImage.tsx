import React from 'react';
import { CustomImage } from './ProductStyle';

export interface ImageProps{
  img: string,
  width?: any
  height?: any
}

function ProductImage(props: ImageProps) {
  return (
    <CustomImage src={props.img} alt='' width={props.width} height={ props.height}/>
  )
}

export default ProductImage
