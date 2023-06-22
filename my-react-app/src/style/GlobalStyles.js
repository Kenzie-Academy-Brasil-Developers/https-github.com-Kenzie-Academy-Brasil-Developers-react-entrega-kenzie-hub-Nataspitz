import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --color-primary: #FF577F;
    --color-primary-opacity: #FF577F50;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;

    --sucess: #3FE864;
    --negative: #E83F5B;

    --size-title1: 1.125rem;
    --size-title2: 1rem;
    --size-title3: 0.875rem;
    --size-button1: 0.875rem;
    --size-button2: 0.75rem;
    --size-text: 0.75rem;
    --size-button: 0.875rem

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, input, button, select, a {
    font-family: 'Inter', sans-serif;
}

h1{
    color: white;
    font-size: var(--size-title1);
}

li, ol{
    list-style: none;
}

button{
    cursor: pointer;
    font-size: var(--size-button);
    border: none;
}

input{
    border-radius: 4px;
    padding-left: 10px;
}

h2{
    color: var(--grey-0);
    font-size: var(--size-title2);
}

p, span{
    font-size: var(--size-text);
    color: var(--grey-1);
}

label{
    margin-bottom: 5px;
}

body{
    background-color: var(--grey-4);
}

.subHeader{
    border: 1px solid var(--grey-3);
}


`