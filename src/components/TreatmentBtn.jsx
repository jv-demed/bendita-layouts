import styled from 'styled-components';

const TreatmentBtnStyled = styled.div`
    align-items: center;
    background-color: #331138;
    color: white;
    display: flex;
    font-family: 'Source Sans Pro', sans-serif;
    justify-content: center;
    padding: 10px;
`

export default function TreatmentBtn({title}){
    return(
        <TreatmentBtnStyled>
            <span>{title}</span>
        </TreatmentBtnStyled>
    )
}