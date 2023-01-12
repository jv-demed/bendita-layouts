import Link from 'next/link';
import styled from 'styled-components';

const ProcedimentosStyled = styled.main`
    align-items: center;
    background-image: linear-gradient(to bottom,#471e4e,#35173b);
    color: white;
    display: flex;
    flex-direction: column;
    font-family: sans-serif;
    gap: 10px;
    height: 100vh;
    justify-content: center;
    a{
        border: 1px solid white;
        border-radius: 4px;
        color: white;
        font-size: 1.2rem;
        padding: 5px 12px;
    }
`

export default function Procedimentos(){
    return(
        <ProcedimentosStyled>
            <h1>PROCEDIMENTOS</h1>
            <Link href='/faciais'>
                <a>Procedimentos Faciais</a>
            </Link>
            <Link href='/corporais'>
                <a>Procedimentos Corporais</a>
            </Link>
        </ProcedimentosStyled>
    )
}