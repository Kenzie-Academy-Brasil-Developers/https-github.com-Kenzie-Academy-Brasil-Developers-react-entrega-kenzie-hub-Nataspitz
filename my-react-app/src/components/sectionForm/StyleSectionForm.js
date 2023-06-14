import styled from "styled-components";
import { css } from "styled-components";

export const StyleSectionForm = styled.section`
background-color: var(--grey-3);
border-radius: 5px;
padding: 40px 10px;

.column{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.row{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.container__login{
    margin: 30px 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    span{
        font-weight: 600;
    }

    .buttonLogin{
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 40px;
      background-color: var(--grey-1);
      color: var(--grey-0);
      border-radius: 5px;

      :hover{
        background-color: var(--grey-2);
      }
    }


}



`