import styled from 'styled-components';

export const Container = styled.div`
   display: ${(props) => (props.isShow ? 'flex' : 'none')};
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   z-index: 100;
   justify-content: center;
   align-items: center;
`;

export const Overlay = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.7);
   z-index: 1;
`;

export const Modal = styled.div`
   position: relative;
   width: 340px;
   max-width: 100%;
   padding: 15px;
   background-color: #fff;
   z-index: 2;
`;
