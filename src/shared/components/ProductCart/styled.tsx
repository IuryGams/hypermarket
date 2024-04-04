"use client";

import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: 5.5rem 2fr 1fr;
    gap: 1rem;
    padding: 1rem 0px;
`

export const BoxFigure = styled.figure`
    width: 5.5rem;
    height: 5.5rem;
    object-fit: contain;
    position: relative;
    background-color: rgb(240, 240, 240);

    figcaption{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--subtext-color);
        font-size: 10px;
        white-space: nowrap;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-flex: 1;
    flex-grow: 1;
    align-items: flex-start;
    gap: 0.5rem;

    h2{
        font-size: 20px;
        text-transform: capitalize;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    -webkit-box-pack: justify;
    justify-content: space-between;
    gap: 0.5rem;
`

export const BoxQuantity = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: fit-content;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
`

export const BoxPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;

    span{
        font-size: 14px;
    }

    b {
        color: var(--primary-color);
    }
`