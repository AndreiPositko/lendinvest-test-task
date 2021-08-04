import React from 'react';

import Button from '../Button/index';

import * as Styled from './styled'

const LoanItem = ({ buttonOnClick, data }) => {
    const { id, title } = data;

    return (
        <Styled.Container>
            <Styled.HeaderWrapper>
                <Styled.Title>
                    loan name
                     {id}
                </Styled.Title>
                {data.invested && (
                    <Styled.InvestLabel>Invested</Styled.InvestLabel>
                )}
            </Styled.HeaderWrapper>
            <Styled.Content>
                <Styled.ContentText>
                     {title}
                </Styled.ContentText>
                <Button onClick={() => buttonOnClick(id)}>
                    Invest
                </Button>
            </Styled.Content>
        </Styled.Container>
    )
}

export default LoanItem;
