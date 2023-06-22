import styled from "styled-components";

export const StyleList = styled.ul`
background-color: var(--grey-2);
padding: 10px 20px;

li{
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-2);

    :hover{
        background-color: var(--grey-1);
    }
}
`