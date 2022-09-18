import { useState } from 'react';
import styled from 'styled-components';
import TreatmentBtn from '../src/components/TreatmentBtn';
import TreatmentCarousel from '../src/components/TreatmentCarousel';
import { corporais } from '../src/data/tratamentos';

const CorporaisStyled = styled.section`
    background-image: linear-gradient(to bottom, #471e4e, #35173b);
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    max-height: 100vh;
    min-height: 100vh;
    padding: 4% 16%;
    padding-bottom: 5%;
    width: 100%;
    h1{
        color: white;
        font-size: 1.8rem;
    }
    .btns{
        cursor: pointer;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 4%;
        width: 100%;
    }
    .selected{
        border: 1px solid white;
    }
    @media(max-width: 650px){
        padding: 8% 4%;
        .btns{
            margin-top: 8%;
        }
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
                        <div 
                            key={tratamento.nome}
                            className={tratamentoAtivo == tratamento ? 'selected' : ''}
                        >
                            <TreatmentBtn 
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