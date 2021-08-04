import React, { useState, useMemo } from 'react';

import Button from '../Button';

import { formatCurrencyToNumber, formatCurrencyToString } from '../../utils/index'

import * as Styled from './styled'

const InvestContent = ({ handleInvest, activeLoan }) => {
    const [error, setError] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const availableNumber = useMemo(
        () => activeLoan ? formatCurrencyToNumber(activeLoan.available) : 0,
        [activeLoan]
    );

    const handleError = (inputValue, currentValue) => {
        if (inputValue > currentValue) {
            setError(true);
        } else {
            setError(false);
        }
    }

    const handleInputValue = (event) => {
        const { value } = event.target;
        const valueNumber = formatCurrencyToNumber(value);

        // Prevent user to enter investment amount bigger than available

        // if (!valueNumber || valueNumber < 0 || valueNumber >= availableNumber) {
        //     return;
        // }

        handleError(valueNumber, availableNumber)
        setInputValue(formatCurrencyToString(valueNumber));
    }

    const clickButtonInvest = () => {
        handleInvest(activeLoan.id, formatCurrencyToNumber(inputValue));
        setInputValue('');
    }

    if (!activeLoan) {
        return null;
    }
    
    return (
        <>
            <Styled.Title>
                {activeLoan.title}
            </Styled.Title>
            <Styled.SubTitle>Loan title you've clicked</Styled.SubTitle>
            <Styled.Text>
                Available:
                <Styled.BoldSpan>
                    {activeLoan.available}
                </Styled.BoldSpan>
            </Styled.Text>
            <Styled.Text>
                Loan ends in:
                <Styled.BoldSpan>
                    {activeLoan.term_remaining}
                </Styled.BoldSpan>
            </Styled.Text>
            <Styled.Text>Investment amount (£)</Styled.Text>
            <Styled.Wrapper>
                <Styled.Input value={inputValue} placeholder="1,000" onChange={handleInputValue} type="text" error={ error }/>
                <Button onClick={clickButtonInvest} disabled={error || !inputValue}>
                    invest
                </Button>
                 {error ? (<Styled.ErrorText>You can invest only { formatCurrencyToString(availableNumber) }</Styled.ErrorText>) : null}
            </Styled.Wrapper>
        </>
    )
}

export default InvestContent;