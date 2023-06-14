import styled from "styled-components";

export const StyleForm = styled.form`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    label{
        margin-top: 10px;
        font-size: var(--size-text);
        color: var(--grey-0);
    }

    input{
        background-color: var(--grey-2);
        color: var(--grey-0);
        border: none;
        height: 40px;
        margin-bottom: 20px;

        ::placeholder{
            font-size: var(--size-text);
            color: var(--grey-1);
        }

        :focus{
            border: 1px solid var(--grey-0);
        }

    }

     .login{
        background-color: var(--color-primary);
        color: var(--grey-0);
        border: none;
        border-radius: 5px;
        height: 40px;
        margin-top: 15px;
        font-size: var(--size-text-button1);

        :hover{
            background-color: var(--color-primary-focus);
        }

     }

         .register{
        background-color: var(--color-primary-opacity);
        color: var(--grey-0);
        border: none;
        border-radius: 5px;
        height: 40px;
        margin-top: 15px;


        :hover{
            background-color: var(--color-primary-focus);
        }
    }

    select{
        height: 40px;
        background-color: var(--grey-2);
        color: var(--grey-1);
        border: none;
        padding: 0 10px;

        :focus{
            border: 1px solid var(--grey-0);
        }
    }

`