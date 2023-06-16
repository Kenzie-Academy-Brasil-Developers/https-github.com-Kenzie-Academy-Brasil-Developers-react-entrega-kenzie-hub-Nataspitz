import styled from "styled-components";

export const StyleContainerDash = styled.div`
    padding: 20px 15px;
    margin: auto;
    max-width: 1000px;


 div:nth-child(1){
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

 

    @media(min-width: 768px){
        flex-direction: row;
        justify-content: space-between;
    }
 }
`