import styled from 'styled-components';

const BoxStyled = styled.div`
    align-items: center;
    background-color: #331138;
    color: white;
    display: flex;
    justify-content: center;
    padding: 10px;
`

export default function Box({title}){
    return(
        <BoxStyled>
            <span>{title}</span>
        </BoxStyled>
    )
}