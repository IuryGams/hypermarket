"use client";
import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid transparent;
    padding: 0.5em;
    background-color: white;
    gap: 12px;
    border-radius: 16px;
    box-shadow: rgba(40, 41, 61, 0.08) 0px 0px 1px, rgba(96, 97, 112, 0.16) 0px 0.5px 2px;

    &:hover{
        border: 1px solid var(--primary-color);
    }

    h2{
        text-transform: capitalize;
        color: #2B2D42; 
    }

    h3{
        color: var(--primary-color);
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: var(--primary-color);
        font-family: 'Nunito', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        color: white;
        border: 2px solid transparent;
        width: 90%;
        height: 40px;
        padding: 0 15px;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 3px;
        white-space: nowrap;
        transition: all 0.3s ease-in-out;
        font-size: 15px;
        margin-bottom: 8px;

        &:hover{
            background-color: white;
            border: 2px solid var(--primary-color);
            color: black;
        }
    }
`

export const BoxFigure = styled.figure`
    position: relative;
    width: 220px;
    height: 180px;
    background-color: rgb(240, 240, 240);
    margin-top: 8px;
    border-radius: 8px;

    figcaption{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--subtext-color);
    }
`