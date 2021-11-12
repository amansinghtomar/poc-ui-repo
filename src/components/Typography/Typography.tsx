import React from "react";
import { Heading1, Heading2, Heading3, Paragrapth } from "./TypographyStyle";

interface TypographyProps {
	variant: String;
	label: any;
	color: any;
}

const Typography: React.FC<TypographyProps> = (props: TypographyProps) => {
	if (props.variant === "h1") {
		return <Heading1 color={props.color}>{props.label}</Heading1>;
	}

	if (props.variant === "h2") {
		return <Heading2 color={props.color}>{props.label}</Heading2>;
	}
	if (props.variant === "h3") {
		return <Heading3 color={props.color}>{props.label}</Heading3>;
	}
	if (props.variant === "p") {
		return <Paragrapth color={props.color}>{props.label}</Paragrapth>;
	}
	return <Paragrapth color={props.color}>{props.label}</Paragrapth>;
};

export default Typography;
