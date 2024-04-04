"use client";
import styled from "styled-components";

export const AsideContainer = styled.aside`
    position: sticky;
    top: 2em;
    border-radius: 2px;
    background-color: white;
    box-shadow: rgba(40, 41, 61, 0.08) 0px 0px 1px, rgba(96, 97, 112, 0.16) 0px 0.5px 2px;
    width: 25%;
    min-height: 255px;
    max-height: 265px;
    padding: 1em;
`

export const BoxIcon = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;

    h2{
        font-size: 16px;
    }
`

export const FlexBoxBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-block: 1em;

    span{
        white-space: nowrap;
    }
`

export const FullPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;

    span{
        color: var(--subtext-color);
    }
`

export const Offer = styled.div`
    margin-block: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0.75em 2em;
    background-color: #E5FFF1;

    span, h4, b{
        color: var(--green-text);
    }
    
    h4 {
        font-size: 20px;
    }
`