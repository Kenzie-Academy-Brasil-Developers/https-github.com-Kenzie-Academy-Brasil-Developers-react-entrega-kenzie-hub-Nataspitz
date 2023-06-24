import styled from "styled-components";

export const StyleHeader = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: var(--grey-2);
   height: 45px;
   padding: 0 25px;
   margin-bottom: 10px;

   h3{
       font-size: var(--size-text);
   }

   button{
       background: transparent;
       color: var(--grey-1);
    }

`