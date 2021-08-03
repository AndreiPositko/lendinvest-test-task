import React from 'react';

import * as Styled from './styled'

const InvestModal = ({ children }) => {

    return (
        <Styled.Container>
            <Styled.Overlay/>
            <Styled.Modal>
                { children }
            </Styled.Modal>
        </Styled.Container>
    )
}

export default InvestModal;
