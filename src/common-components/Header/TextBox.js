import styled from 'styled-components'
import {
  Colors,
  BorderRadiuses,
  FontFamilies,
  Shadows,
  Spaces,
} from '../../shared/DesignTokens'

export const TextBox = styled.input`
  border: none;
  outline: none;
  width: 200px;
  height: 60px;
  font-family: ${FontFamilies.PRIMARY}; 
  font-variant: small-caps;
  border-radius: ${BorderRadiuses.ONE};
  background: ${Colors.NEUTRAL_WHITE};
  box-shadow: ${Shadows.ONE}; 
  type: "text";
  padding: 5px; 
  margin: 5px;
  text-align: center;
`;
