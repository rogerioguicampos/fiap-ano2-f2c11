import styled from 'styled-components';
import { 
  Colors,
  FontFamilies,
  FontLetterSpacings,
  FontSizes,
  FontWeights,
} from '../../shared/DesignTokens';

export const Header = styled.h1`
  color: ${Colors.NEUTRAL_WHITE};
  font-family: ${FontFamilies.PRIMARY};
  font-size: ${FontSizes.FIVE};
  font-style: normal;
  font-weight: ${FontWeights.EX_BOLD};
`;
