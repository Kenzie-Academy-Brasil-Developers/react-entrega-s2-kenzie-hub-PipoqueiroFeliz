import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,header {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --white:#F8F9FA;
        --lilGray:#868E96;
        --gray:#343B41;
        --bigGray:#212529;
        --black:#121214;
        --red:#FF577F;
        --focusRed:#FF427F;
        --negRed:#59323F;
    }

    body{
        background: var(--black);
        color: var(--white);
    }

    body, input, button {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }

    h1,h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
    }
    h1{
        font-size:18.27px;
    }
    h2{
        font-size: 16.24px;
        font-weight: 600;
    }
    h3{font-size:16.24px}
    p{
        font-weight: 400;
        font-size:12.18px;
        strong{font-weight:12.18px;}
        
    }

    button{
        cursor: pointer;
    }

    a {
        text-decoration: none ;
    }
`;
