import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        border: 3px solid red;
        height: 100vh;
    }
`

export default Globals;