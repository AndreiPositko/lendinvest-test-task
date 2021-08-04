import styled from 'styled-components';

import colors from '../../styles/variables/colors';
import padding from '../../styles/variables/padding';

export const ButtonInvest = styled.button`
   outline: none;
   padding: ${padding.padding_button};
   cursor: pointer;
   background-color: ${colors.bgColors.yellow};
   border: 1px solid ${colors.bgColors.yellowDark};
   text-transform: uppercase;
   &:hover {
      background-color: ${colors.bgColors.yellowDark};
   }
   &:disabled {
      pointer-events: none;
   }
`;
