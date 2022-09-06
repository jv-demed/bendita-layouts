import styled from 'styled-components';

const BoxStyled = styled.div`
    background-color: white;
    height: 30px;
    width: 18%;
`

export default function Box({title}){
    return(
        <BoxStyled>
            <span>{title}</span>
        </BoxStyled>
    )
}