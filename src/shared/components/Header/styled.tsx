"use client";
import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    flex-direction: column;
    height: 10dvh;
    background-color: #15161D;
    color: white;
    border-bottom: 3px solid #D10024;
`

export const TopBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 1em;

    a {
        color: white;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;

        button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 100%;
            cursor: pointer;
            background-color: transparent;
            border: none;
            transition: all 0.3s ease-in-out;

            &:hover{
                background-color: white;

                svg{
                    fill: black;
                }
            }

            svg{
                fill: white;
            }
        }
    }
`