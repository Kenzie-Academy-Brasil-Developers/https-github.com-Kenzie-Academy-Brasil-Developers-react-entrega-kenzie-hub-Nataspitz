import styled from "styled-components";

export const StyleModalEdit = styled.div`
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
        
        p{
            font-size: var(--size-label);
            color: var(--grey-0);
            margin:10px 0;
        }

        .div__inputEdit{
            cursor: text;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 40px;
            padding: 0 15px;
            background-color: var(--grey-2);
            border-radius: 2px;
            color: var(--grey-0);
            margin-bottom: 15px;

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

        .buttons__form{
            width: 100%;
            display: flex;
            gap: 10px;
            margin: 15px 0;

            button{
            height: 40px;
            padding: 0 15px;
            border-radius: 4px;
            color: var(--grey-0);
            font-size: var(--size-text);
        }   
        
        #edit_1{
            width: 70%;
            background-color: var(--color-primary-opacity);

            :hover{
                background-color: var(--color-primary);
            }
        }

        #edit_2{
            width: 30%;
            background-color: var(--grey-1);
        }
    }  
}
  
`