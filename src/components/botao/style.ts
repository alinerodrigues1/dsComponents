import styled, { css } from "styled-components";

export interface ButtonProps {
    texto?: string
    // classe?: 'default' | 'success' | 'danger'
    tipo?: 'primary' | 'secondary' | 'tertiary'
    positionIcon?: 'before' | 'after' | 'only' 
}

const buttonTypesVariation = {
    primary: css`
        background: #0F62C1;
        border: solid 1px #0F62C1;
        color: #fff;
        &:hover {
            background: #07448a;
            border: solid 1px #07448a;
        }
        &:active{
            background: #162c64;
            border: solid 1px #162c64;             
        }
    `,
    secondary: css`
        background: #fff;
        border: solid 1px #0F62C1;
        color: #0F62C1;
        &:hover {
            background: #fff;
            border: solid 1px #0F62C1;
            color: #07448a;
        }
        &:active{
            background: #EBF0FF;
            border: solid 1px #162c64;   
            color: #162c64;             
        }
    `,
    tertiary: css`
        background: #fff;
        border: solid 1px #fff;   
        color: #0F62C1;
        &:hover {
            background: #ebf0ff;
            border: solid 1px #ebf0ff;   
            color: #07448a
        }
        &:active{
            background: #EBF0FF;
            border: solid 1px #c5d6fe;   
            color: #07448a;             
        }
    `,
}

export const StyledButton = styled.button<ButtonProps>`
    ${props => buttonTypesVariation[props.tipo || 'primary']}
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 4px;
    font-family: "Nunito Sans", sans-serif;

`