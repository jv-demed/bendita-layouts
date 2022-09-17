import { useState } from 'react';
import styled from 'styled-components';
import TreatmentBtn from '../src/components/TreatmentBtn';
import TreatmentCarousel from '../src/components/TreatmentCarousel';
import { corporais } from '../src/data/tratamentos';

const CorporaisStyled = styled.section`
    background-color: #471e4e;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    padding-bottom: 5%;
    width: 100%;
    h1{
        color: white;
        font-size: 1.8rem;
        padding: 4% 16% 2%;
    }
    .btns{
        cursor: pointer;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        padding: 5px 16%;
        width: 100%;
    }
    .selected{
        border: 1px solid white;
    }
`

export default function Corporais(){

    const [tratamentoAtivo, setTratamentoAtivo] = useState(corporais[0])

    return(
        <CorporaisStyled>
            <h1>Tratamentos</h1>
            <div className={'btns'}>
                {corporais.map((tratamento) => {
                    return(
                        <div className={tratamentoAtivo == tratamento ? 'selected' : ''}>
                            <TreatmentBtn 
                                key={tratamento.nome}
                                tratamento={tratamento} 
                                setTratamentoAtivo={setTratamentoAtivo}
                            />
                        </div>
                    )
                })}
            </div>
            <TreatmentCarousel tratamento={tratamentoAtivo} />
        </CorporaisStyled>
    )
}