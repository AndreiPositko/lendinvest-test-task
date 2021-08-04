import React from 'react';

import * as Styled from './styled'

const InvestModal = ({ children, isOpenModal, closeModal  }) => {

    return (
        <Styled.Container isShow={ isOpenModal }>
            <Styled.Overlay onClick={ closeModal }/>
            <Styled.Modal>
                {isOpenModal && children}
            </Styled.Modal>
        </Styled.Container>
    )
}

export default InvestModal;
