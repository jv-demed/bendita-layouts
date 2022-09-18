import styled from 'styled-components';

const TreatmentBtnMobileStyled = styled.select`
    
`

export default function TreatmentBtnMobile({tratamentos, setTratamentoAtivo}){
    return(
        <TreatmentBtnMobileStyled>
            {tratamentos.map((tratamento) => {
                return(
                    <option onClick={() => setTratamentoAtivo(tratamento)}>
                        {tratamento.nome}
                    </option>
                )
            })}
        </TreatmentBtnMobileStyled>
    )
}