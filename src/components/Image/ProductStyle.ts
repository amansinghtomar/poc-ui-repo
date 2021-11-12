import styled from 'styled-components';

export const CustomImage = styled.img`
  width : ${props => `${props.width}px` ? props.width : '100%' };
  height : ${props=> `${props.height}px`? props.height: '100%' };
`;