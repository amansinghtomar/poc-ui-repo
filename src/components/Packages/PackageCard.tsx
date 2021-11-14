import React from 'react';
import {
	Cards,
	CardItem,
	CardImage,
	CardInfo,
	CardBottom,
} from "./PackageCardStyle";
import ProductImage from "../Image/ProductImage";
import Typography from "../Typography/Typography";
import  Button  from "../Button/button";

interface CardDetailsProps{
  productImage: string,
  productTitle: string,
  productSubDetail: string,
	productButtonLabel: string
	onClick?: () => void;
}

function PackageCard({productImage,productTitle,productSubDetail,productButtonLabel,onClick}:CardDetailsProps) {
	return (
		
				<Cards>
					<CardItem>
						<CardImage>
              <ProductImage img={productImage}  />
						</CardImage>
						<CardInfo>
              <Typography variant='h2' color='#32325d' label={productTitle} />
              <Typography variant='p' color='#000000' label={productSubDetail} />
						</CardInfo>
						<CardBottom>
					<Button label={productButtonLabel} onClick={onClick}/>
						</CardBottom>
					</CardItem>
				</Cards>
		
	);
}

export default PackageCard;