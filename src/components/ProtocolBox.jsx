import styled from 'styled-components';

const ProtocolBoxStyled = styled.div`
    background-color: #331138;
    display: flex;
    color: white;
    flex-direction: column;
    width: 90%;
    img{
        width: 100%;
    }
    .txt{
        display: flex;
        flex-direction: column;
        font-size: 1.1rem;
        gap: 8px;
        justify-content: space-between;
        padding: 12px 8px;
        word-break: break-all;
        a{
            color: white;
            font-size: 0.9rem;
        }
    }
    :hover{
        overflow: hidden;
    }
    :hover img{
        scale: 110%;
    }
    @media(max-width: 650px){
        .txt{
            font-size: 1.3rem;
            a{
                font-size: 1.1rem;
            }
        }
    }
`

export default function ProtocolBox({protocolo}){
    return(
        <ProtocolBoxStyled>
            <img src={protocolo.img} />
            <div className='txt'>
                <span>{protocolo.nome}</span>
                <a 
                    href={`https://wa.me/5551992004396?text=Saber%20mais%20sobre%20${protocolo.nome}`} 
                    target='_blanc'
                >
                    Veja mais!
                </a>
            </div>
        </ProtocolBoxStyled>
    )
}