import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Header = styled.header`
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	padding: 15px 20px;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Content = styled.div`
	background: whitesmoke;
	display: flex;
	flex-wrap: wrap;
	padding: 0;
	margin: 0;
	justify-content: center;
`;

export const Cards = styled.div`
	display: flex;
	padding: 1rem;
	margin-bottom: 2rem;
	width: 30%;
`;

export const CardItem = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	width: 100%;
	border-radius: 6px;
	box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
	overflow: hidden;
	transition: transform 0.5s;
	-webkit-transition: transform 0.5s;

	&:hover {
		cursor: pointer;
		transform: scale(1.1);
		-webkit-transform: scale(1.1);
	}
`;

export const CardImage = styled.div`
	height: 200px;
	overflow: hidden;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 6px 6px 0px 0px;
	opacity: 0.91;
`;

export const CardInfo = styled.div`
	display: flex;
	flex: 1 1 auto;
	flex-direction: column;
	padding: 1rem;
	line-height: 1.5em;
`;

export const CardBottom = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 5px;
`;
