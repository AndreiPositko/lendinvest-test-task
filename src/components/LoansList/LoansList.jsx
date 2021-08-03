import React, { useState, useMemo } from 'react';

import LoanItem from '../LoanItem/Index';
import InvestModal from '../InvestModal/index';
import InvestContent from '../InvestContent/index';

import { formatCurrencyToNumber, formatCurrencyToString } from '../../utils';

import currentLoans from '../../mocks/currentLoans.json';

import * as Styled from './styled';

const LoansList = () => {
    const [loans, setLoans] = useState(currentLoans.loans);
    const [isDisplayedModal, setIsDisplayedModal] = useState(false);
    const [activeLoan, setActiveLoan] = useState(null);

    const totalAmount = useMemo(
        () => loans.reduce((acc, item) => {
            const available = formatCurrencyToNumber(item.available);

            return acc + available;
        }, 0),
        [loans],
    );

    const handleInvestModalOpen = (id) => {
        const loan = loans.find(item => item.id === id);

        if (!loan) {
            return;
        }

        setActiveLoan(loan);
        setIsDisplayedModal(true)
    }

    const closeModal = () => {
        setIsDisplayedModal(false)
        setActiveLoan(null);
    }

    const handleInvest = (id, investValue) => {
        const newLoans = [...loans];
        const selectedIndex = newLoans.findIndex(item => item.id === id);

        if (selectedIndex === -1) {
            return;
        }

        const oldAvailable = newLoans[selectedIndex].available;

        newLoans[selectedIndex].available = formatCurrencyToString(formatCurrencyToNumber(oldAvailable) - investValue);
        newLoans[selectedIndex].invested = true;

        setLoans(newLoans)
        closeModal();
    }

    return (
        <>
            <Styled.Wrapper>
                <Styled.Title>current loans</Styled.Title>
                {loans.map(loan => (
                    <LoanItem
                        key={loan.id}
                        data={loan}
                        buttonOnClick={handleInvestModalOpen}
                    />
                ))}
                <Styled.TotalData>
                    Total amount available for investments: { formatCurrencyToString(totalAmount) }
                </Styled.TotalData>
            </Styled.Wrapper>
            <InvestModal isOpenModal={isDisplayedModal} closeModal={closeModal}>
                <InvestContent
                    handleInvest={handleInvest}
                    activeLoan={activeLoan}
                />
            </InvestModal>
        </>
    )
}

export default LoansList;