import React from 'react';

import * as Styled from './styled';

const LoansList = () => {
    
    return (
        <>
            <Styled.Wrapper>
                <Styled.Title>current loans</Styled.Title>
                <Styled.TotalData>
                    Total amount available for investments:
                </Styled.TotalData>
            </Styled.Wrapper>
        </>
    )
}

export default LoansList;