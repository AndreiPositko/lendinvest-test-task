import React from 'react';

import LoansList from '../LoansList';

import * as Styled from './styled';

const Layout = () => {
    return (
        <Styled.Container>
            <LoansList/>
        </Styled.Container>
    )
}

export default Layout;
