import React from 'react';

import { ButtonInvest } from './styled';

const Button = (props) => {
    return (
        <ButtonInvest {...props}>{ props.children }</ButtonInvest>
    )
}

export default Button;
