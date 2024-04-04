"use client";
import styled from "styled-components";

export const GridCollection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    align-items: center;
    gap: 16px;
    column-gap: 24px;
` 