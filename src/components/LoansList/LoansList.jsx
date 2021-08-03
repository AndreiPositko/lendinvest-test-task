import React, { useState } from 'react';

import LoanItem from '../LoanItem/Index';
import InvestModal from '../InvestModal/index';
import InvestContent from '../InvestContent/index';

import currentLoans from '../../mocks/currentLoans.json';

import * as Styled from './styled';

const LoansList = () => {
    const [loans, setLoans] = useState(currentLoans.loans);
    
    return (
        <>
            <Styled.Wrapper>
                <Styled.Title>current loans</Styled.Title>
                {loans.map(loan => (
                    <LoanItem key={loan.id} data={ loan }/>
                ))}
                
                <Styled.TotalData>
                    Total amount available for investments:
                </Styled.TotalData>
            </Styled.Wrapper>
            <InvestModal>
                <InvestContent/>
            </InvestModal>
        </>
    )
}

export default LoansList;