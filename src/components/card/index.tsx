import React, { ReactNode } from "react";
import { StyledCard } from "./style";

export interface CardProps {
    children: ReactNode
}

export const Card = ({children}: CardProps) => {
    return (
        <StyledCard>
            {children}
        </StyledCard>
    )
}