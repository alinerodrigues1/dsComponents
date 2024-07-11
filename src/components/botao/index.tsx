import React, { ReactNode } from "react";
import { StyledButton } from './style'

export interface ButtonProps {
    children: ReactNode
}
export const Botao = ({children}:ButtonProps) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}