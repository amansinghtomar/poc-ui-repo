import React from 'react';
import {Container,LeftColumn,RightColumn,CustomImage,ProductDescription,ProductDescriptionTile,ProductDescriptionHeading,ProductDescriptionContent} from './PackageDetailStyle'
import ProductImage from "../Image/ProductImage";
import Typography from "../Typography/Typography";

interface PackageDetailProps{
   productImage: string,
  productTitle: string,
  productSubDetail: string,
  productDescription:string
}

function PackageDetail({productImage,productTitle,productSubDetail,productDescription}:PackageDetailProps) {
  return (
    <Container>
      
      <LeftColumn>
          <ProductImage img={productImage} width='400' height='400' />
      </LeftColumn>
      <RightColumn>
        <ProductDescription>
          <Typography variant='h1' color='#32325d' label={productTitle} />
          <Typography variant='h2' color=' #43484D' label={productSubDetail} />
            <Typography variant='p' color='#86939E' label={productDescription} />
        </ProductDescription>
      </RightColumn>
    </Container>
  )
}



export default PackageDetail
