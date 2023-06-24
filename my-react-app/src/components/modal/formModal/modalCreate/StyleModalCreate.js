import styled from "styled-components";

export const StyleModalCreate = styled.div`
    background-color: var(--grey-4);
    width: 100%;
    max-width: 400px;
    margin: 0 10pz;


    form{
        display: flex;
        flex-direction: column;
        padding: 0 30px;

        label{
            font-size: var(--size-label);
            color: var(--grey-0);
            margin:10px 0;
        }

        input{
            height: 40px;
            padding: 0 15px;
            background-color: var(--grey-2);
            border: 1px solid var(--grey-0);
            border-radius: 2px;
            color: var(--grey-0);
            margin-bottom: 15px;

            ::placeholder{
                color: var(--grey-1);
            }
        }

        select{
            height: 40px;
            padding: 0 15px;
            background-color: var(--grey-2);
            border: 1px solid var(--grey-0);
            border-radius: 2px;
            color: var(--grey-0);
            margin-bottom: 15px;
        }

        button{
            height: 35px;
            padding: 0 15px;
            background-color: var( --color-primary);
            border-radius: 5px;
            color: var(--grey-0);
            font-size: var(--size-text);
            margin-bottom: 25px;

            :hover{
                background-color: var( --color-primary-focus);
            }

        }

    }
    `