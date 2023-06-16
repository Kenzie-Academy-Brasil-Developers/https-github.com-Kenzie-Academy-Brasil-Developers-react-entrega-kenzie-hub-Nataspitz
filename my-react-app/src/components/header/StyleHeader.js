import styled from "styled-components";

export const  StyleHeader = styled.header`
    margin-top: 20px;
    height: 80px;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        height: 35px;
        background-color: var(--grey-3);
        font-size: var(--size-button2);
        color: var(--grey-0);
    }

    button{
        width: 80px;
        height: 35px;
        background-color: var(--grey-3);
        font-size: var(--size-button2);
        color: var(--grey-0);
    }
`