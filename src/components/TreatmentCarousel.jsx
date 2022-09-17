import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProtocolBox from './ProtocolBox';

const TreatmentCarouselStyled = styled.div`
    padding: 40px 16%;
`

export default function TreatmentCarousel({tratamento}){

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 851 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 850, min: 651 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 1
        }
    };

    return(
        <TreatmentCarouselStyled>
            <Carousel
                infinite={true}
                removeArrowOnDeviceType={'mobile'}
                responsive={responsive}
            >
                {tratamento.protocolos.map((protocolo) => {
                    return(
                        <ProtocolBox key={`box-${protocolo.nome}`} title={protocolo.nome} />
                    )
                })}
            </Carousel>
        </TreatmentCarouselStyled>
    )
}