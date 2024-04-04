"use client";

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const ButtonStyled = styled.button`
    display: flex;
    width: 30px;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 35px;
    
    svg{
        fill: var(--primary-color);
        width: 20px;
        height: 20px; 
    }
`

export const StyledInput = styled.input`
    width: 50px;
    line-height: 35px;
    color: var(--text-primary-color);
    font-weight: bold;
    border: none;
    text-align: center;
    outline: none;
    font-size: 20px;
    cursor: default;
    height: 35px;
`