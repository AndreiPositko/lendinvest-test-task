import styled from 'styled-components';

import colors from '../../styles/variables/colors';
import margin from '../../styles/variables/margin';
import padding from '../../styles/variables/padding';
import titles from '../../styles/variables/titles';

export const Wrapper = styled.div`
   color: ${colors.textColor.main};
   width: 100%;
   max-width: 450px;
   background-color: ${colors.bgColors.greyLight};
   padding: ${padding.padding_15};
`;

export const Title = styled.h1`
   text-transform: capitalize;
   margin-bottom: ${margin.margin_bottom_35};
`;

export const TotalData = styled.div`
   margin: 0 auto;
   font-size: ${titles.fontSizeMain};
   max-width: 80%;
   text-align: center;
`;

export const BoldSpan = styled.span`
   font-weight: bold;
   margin-left: 7px;
`;
