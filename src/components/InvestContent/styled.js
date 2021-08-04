import styled from 'styled-components';

import titles from '../../styles/variables/titles';
import margin from '../../styles/variables/margin';
import padding from '../../styles/variables/padding';
import colors from '../../styles/variables/colors';

export const Title = styled.h2`
   text-transform: capitalize;
   margin-bottom: ${margin.margin_bottom_12};
`;

export const SubTitle = styled.p`
   font-size: ${titles.fontSizeMain};
   margin-bottom: ${margin.margin_bottom_12};
`;

export const Text = styled.p`
   font-size: ${titles.fontSizeMain};
   &::nth-child(2) {
      margin-bottom: ${margin.margin_bottom_12};
   }
`;

export const Wrapper = styled.div`
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 70px;
`;

export const Input = styled.input`
   outline: none;
   height: 36px;
   border: 1px solid
      ${(props) =>
         props.error ? colors.textColor.red : colors.bgColors.greyDark};
   text-align: right;
   margin-right: ${margin.margin_right_5};
   padding: ${padding.padding_input};
`;

export const ErrorText = styled.span`
   position: absolute;
   bottom: -5px;
   display: block;
   font-size: 14px;
   color: red;
`;

export const BoldSpan = styled.span`
   font-weight: bold;
   margin-left: 7px;
`;
