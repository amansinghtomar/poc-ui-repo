import HeaderTab from "../Header/Header";
import {
	Wrapper,
	Content,
	Cards,
	CardItem,
	CardImage,
	CardInfo,
	CardBottom,
} from "./PackageCardStyle";
import ProductImage from "../Image/ProductImage";
import Typography from "../Typography/Typography";
import { Button } from "../../stories/Button";

interface CardDetailsProps{
  headerName: string,
  productImage: string,
  productTitle: string,
  productSubDetail: string,
  productButtonLabel:string
}

function CardsDetails({headerName,productImage,productTitle,productSubDetail,productButtonLabel}:CardDetailsProps) {
	return (
		<Wrapper>
			<HeaderTab name={headerName} />
			<Content>
				<Cards>
					<CardItem>
						<CardImage>
              <ProductImage img={productImage} />
  
						</CardImage>
						<CardInfo>
              <Typography variant='h2' color='#32325d' label={productTitle} />
              <Typography variant='p' color='#000000' label={productSubDetail} />
						</CardInfo>
						<CardBottom>
              <Button label={productButtonLabel} />
						</CardBottom>
					</CardItem>
				</Cards>
			</Content>
		</Wrapper>
	);
}

export default CardsDetails;