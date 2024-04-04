"use client";
import styled, {keyframes} from "styled-components";

const rotate = keyframes`
    to{
        transform: rotate(1turn);
    }
`

export const Spin = styled.div`
    width: 50px;
    height: 50px;
    border: 6px solid #e5e5e5;
    border-top-color: #51d4db;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
`

