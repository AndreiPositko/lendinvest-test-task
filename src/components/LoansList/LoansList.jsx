import React, { useState, useMemo } from 'react';

import LoanItem from '../LoanItem/Index';
import InvestModal from '../InvestModal/index';
import InvestContent from '../InvestContent/index';

import { formatCurrencyToNumber, formatCurrencyToString } from '../../utils';

import currentLoans from '../../mocks/currentLoans.json';

import * as Styled from './styled';

const LoansList = () => {
    const [loans, setLoans] = useState(currentLoans.loans);
    
    const totalAmount = useMemo(
    () => loans.reduce((acc, item) => {
        const available = formatCurrencyToNumber(item.available);

        return acc + available;
    }, 0),
    [loans],
    );

    return (
        <>
            <Styled.Wrapper>
                <Styled.Title>current loans</Styled.Title>
                {loans.map(loan => (
                    <LoanItem key={loan.id} data={ loan }/>
                ))}
                
                <Styled.TotalData>
                    Total amount available for investments: { formatCurrencyToString(totalAmount) }
                </Styled.TotalData>
            </Styled.Wrapper>
            <InvestModal>
                <InvestContent/>
            </InvestModal>
        </>
    )
}

export default LoansList;