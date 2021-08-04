import styled from 'styled-components';

import colors from '../../styles/variables/colors';
import margin from '../../styles/variables/margin';
import padding from '../../styles/variables/padding';

export const Container = styled.div`
   background-color: ${colors.bgColors.white};
   border: 1px solid ${colors.bgColors.greyDark};
   padding: ${padding.padding_15};
   margin-bottom: ${margin.margin_bottom_12};
`;

export const HeaderWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: ${margin.margin_bottom_12};
`;

export const Title = styled.h2`
   text-transform: capitalize;
`;

export const Content = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const ContentText = styled.p`
   font-size: 16px;
`;

export const InvestLabel = styled.div`
   color: ${colors.textColor.green};
`;
