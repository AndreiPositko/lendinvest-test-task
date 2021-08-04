import styled from 'styled-components';

export const Title = styled.h2`
   text-transform: capitalize;
   margin-bottom: 12px;
`;

export const SubTitle = styled.p`
   font-size: 16px;
   margin-bottom: 12px;
`;

export const Text = styled.p`
   font-size: 16px;
   &:nth-child(2) {
      margin-bottom: 12px;
   }
`;

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 70px;
`;

export const Input = styled.input`
   outline: none;
   height: 36px;
   border: 1px solid #868383b2;
   text-align: right;
   margin-right: 5px;
   padding: 0 4px;
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
