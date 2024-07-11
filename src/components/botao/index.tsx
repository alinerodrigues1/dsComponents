import React from "react";
import { StyledButton } from './style'

import { IconBaseProps } from 'react-icons'

export interface ButtonProps {
    texto?: string
    // classe?: 'default' | 'success' | 'danger'
    tipo?: 'primary' | 'secondary' | 'tertiary'
    icon?: React.ComponentType<IconBaseProps>
    positionIcon?: 'before' | 'after' | 'only' 
    onClick?: () => void
}

export const Botao = ({texto, onClick, tipo = 'primary'} : ButtonProps) => {
    return (
        <StyledButton onClick={onClick} tipo={tipo}>
            {texto}
        </StyledButton>
    )
}