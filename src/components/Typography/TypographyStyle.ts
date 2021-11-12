import styled from "styled-components";

export const Heading1 = styled.h1`
	font-weight: 300;
	font-size: 52px;
	color: ${(props) => (`${props.color}px` ? props.color : "revert")};
	letter-spacing: -2px;
`;

export const Heading2 = styled.h2`
	font-size: 25px;
	line-height: 1.1em;
	color: ${(props) => (`${props.color}px` ? props.color : "revert")};
	margin-bottom: 0.2em;
`;

export const Heading3 = styled.h3`
	font-size: 20px;
	font-weight: 300;
	color: ${(props) => (`${props.color}px` ? props.color : "revert")};
	line-height: 24px;
`;

export const Paragrapth = styled.p`
	font-size: 16px;
	font-weight: 300;
	color: ${(props) => (`${props.color}px` ? props.color : "revert")};
	line-height: 24px;
`;
