import React, { useState } from 'react';

import Button from '../Button';

import { formatCurrencyToNumber } from '../../utils/index'

import * as Styled from './styled'

const InvestContent = ({ handleInvest, activeLoan }) => {
    const [inputValue, setInputValue] = useState('');

    const clickButtonInvest = () => {
        handleInvest(activeLoan.id, formatCurrencyToNumber(inputValue));
        setInputValue('');
    }
    
    return (
        <>
            <Styled.Title>
                Voluptate et sed tempora qui quisquam.
            </Styled.Title>
            <Styled.SubTitle>Loan title you've clicked</Styled.SubTitle>
            <Styled.Text>
                Available: £ 11,959
            </Styled.Text>
            <Styled.Text>
                Loan ends in: 864000                
            </Styled.Text>
            <Styled.Text>Investment amount (£)</Styled.Text>
            <Styled.Wrapper>
                <Styled.Input placeholder="1,000" type="text"/>
                <Button onClick={ clickButtonInvest }>
                    invest
                </Button>
            </Styled.Wrapper>
        </>
    )
}

export default InvestContent;