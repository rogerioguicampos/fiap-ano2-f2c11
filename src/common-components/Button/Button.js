import styled from 'styled-components';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	FontLetterSpacings,
	FontFamilies,
  FontSizes,
	FontWeights,
} from '../../shared/DesignTokens';
export const Button = styled.button`
	border: none;
	outline: none;
	width: 200px;
	height: 60px;
	font-family: ${FontFamilies.PRIMARY};
	font-weight: ${FontWeights.EX_BOLD};
  font-variant: small-caps;
	background-color: ${Colors.BACK_BOTTON};
	color: ${Colors.NEUTRAL_WHITE};
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
  letter-spacing: ${FontLetterSpacings.EXTRA_LARGE};
	font-size: ${FontSizes.TWO};
  padding: 5px; 
  text-transform: uppercase;
  margin: 5px;
  text-decoration: none;
  cursor: pointer;
 
	&:hover {
		background-color: ${Colors.BACK_BOTTON_HOVER};
	}
`;
