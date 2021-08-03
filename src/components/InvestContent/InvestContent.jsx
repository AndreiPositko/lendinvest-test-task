import React from 'react';

import Button from '../Button';

import * as Styled from './styled'

const InvestContent = () => {
    
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
                <Button>
                    invest
                </Button>
            </Styled.Wrapper>
        </>
        
    )
}

export default InvestContent;