import styled from 'styled-components';
import background from '../../assets/background.jpg'

export const Cont = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`;
