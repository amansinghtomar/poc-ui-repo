import styled from 'styled-components';

export const CustomImage = styled.img`
  width : ${props => props.width ? `${props.width}px` : '100%' };
  height : ${props => props.height ? `${props.height}px` : '300px' };
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 6px 6px 0px 0px;
  opacity: 0.91;
`;