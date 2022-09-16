import styled from 'styled-components';

const ProtocolBoxStyled = styled.div`
    background-color: #331138;
    display: flex;
    color: white;
    flex-direction: column;
    //height: 100px;  
    width: 120px;
    img{
        width: 100%;
    }
    .txt{
        display: flex;
        flex-direction: column;
        font-size: 0.9rem;
        justify-content: space-between;
        padding: 2px 5px;
        word-break: break-all;
        a{
            color: white;
            font-size: 0.7rem;
        }
    }
`

export default function ProtocolBox({title}){
    return(
        <ProtocolBoxStyled>
            <img src="https://i.imgur.com/2mfvDPa.jpg" />
            <div className='txt'>
                <span>{title}</span>
                <a href="#">Veja mais!</a>
            </div>
        </ProtocolBoxStyled>
    )
}