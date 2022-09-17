import styled from 'styled-components';

const TreatmentBtnStyled = styled.div`
    align-items: center;
    background-color: #331138;
    color: white;
    display: flex;
    font-family: 'Source Sans Pro', sans-serif;
    justify-content: center;
    padding: 10px;
    .select{
        border: 1px solid white;
    }
`

export default function TreatmentBtn({tratamento, setTratamentoAtivo}){
    return(
        <TreatmentBtnStyled onClick={() => setTratamentoAtivo(tratamento)}>
            <span>{tratamento.nome}</span>
        </TreatmentBtnStyled>
    )
}