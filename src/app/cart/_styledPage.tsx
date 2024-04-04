"use client";
import styled from "styled-components";



export const Container = styled.section`
    position: relative;
    display: flex;
    gap: 2em;
    margin-block: 2em;
`

export const ContentProducts = styled.article`
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    background-color: white;
    box-shadow: rgba(40, 41, 61, 0.08) 0px 0px 1px, rgba(96, 97, 112, 0.16) 0px 0.5px 2px;
    height: fit-content;
    width: 80%;
    padding: 1em;
`

export const BoxProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 1em 0;
`

export const IconBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
`

// ----------------------------------------

export const BoxClient = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1.5em;
    background-color: white;
    box-shadow: rgba(40, 41, 61, 0.08) 0px 0px 1px, rgba(96, 97, 112, 0.16) 0px 0.5px 2px;
    border-radius: 2px;
`

export const PaymentBox = styled.div`
    display: flex;
    align-items: center;
    padding-block: 1em;
`

export const BoxInput = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 24px;

    input{
        width: 160px;
        padding: 0.75em 1em;
        font-size: 16px;

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button{
            -webkit-appearance: none;
        }
    }

    button{
        padding: 1em;
        cursor: pointer;
        color: white;
        border: none;
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 1px;
        background-color: teal;
    }
`

export const BoxNotes = styled.ul`
    padding-block: 1em;
    margin-left: 40px;

    li{
        margin-block: 10px;
    }
`
