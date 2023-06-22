import styled from "styled-components";

export const StyleMainSectionDash = styled.section`

div:nth-child(1){
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div{
        background-color: var(--grey-3);
        cursor: pointer;
        border-radius: 3px;
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

`