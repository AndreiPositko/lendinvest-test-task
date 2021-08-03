import React from 'react';

import * as Styled from './styled'

const LoanItem = () => {
    return (
        <Styled.Container>
            <Styled.HeaderWrapper>
                <Styled.Title>
                    loan name
                </Styled.Title>
                <Styled.InvestLabel>Invested</Styled.InvestLabel>
            </Styled.HeaderWrapper>
            <Styled.Content>
                <Styled.ContentText>
                    Voluptate et sed tempora qui quisquam.
                </Styled.ContentText>
            </Styled.Content>
        </Styled.Container>
    )
}

export default LoanItem;
