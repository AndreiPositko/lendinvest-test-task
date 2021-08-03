import React from 'react';

import LoanItem from '../LoanItem/Index';
import InvestModal from '../InvestModal/index';
import InvestContent from '../InvestContent/index';

import * as Styled from './styled';

const LoansList = () => {
    
    return (
        <>
            <Styled.Wrapper>
                <Styled.Title>current loans</Styled.Title>
                <LoanItem/>
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