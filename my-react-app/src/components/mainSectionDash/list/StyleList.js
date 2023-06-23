import styled from "styled-components";

export const StyleList = styled.ul`
background-color: var(--grey-2);
padding: 15px 8px;
border-radius: 4px;
display: flex;
flex-direction: column;
gap: 10px;


li{
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-4);
    padding: 0 15px;
    height: 45px;
    border-radius: 4px;

    :hover{
        background-color: var(--grey-1);

        span{
            color: var(--grey-0);
        }
    }
}
`