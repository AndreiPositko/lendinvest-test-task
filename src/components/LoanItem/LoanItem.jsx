import React from 'react';

import Button from '../Button/index';

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
                <Button>
                    Invest
                </Button>
            </Styled.Content>
        </Styled.Container>
    )
}

export default LoanItem;
