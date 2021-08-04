import React from 'react';

import { ButtonInvest } from './styled';

const Button = (props) => {
    return (
        <ButtonInvest {...props} data-testid='button'>{ props.children }</ButtonInvest>
    )
}

export default Button;
