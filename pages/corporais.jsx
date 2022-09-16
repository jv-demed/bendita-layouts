import styled from 'styled-components';
import { Tab } from '@headlessui/react'
import TreatmentBtn from '../src/components/TreatmentBtn';
import ProtocolBox from '../src/components/ProtocolBox';
import { corporais } from '../src/data/tratamentos';

const CorporaisStyled = styled.section`
    background-color: #471e4e;
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    padding-bottom: 5%;
    width: 100%;
    h1{
        color: white;
        font-size: 1.8rem;
        padding: 4% 16% 2%;
    }
    .tabList{
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        padding: 5px 16%;
        width: 100%;
        .tab{
            background-color: #331138;
            border: none;
        }
    }
    .tabPanels{
        display: flex;
        margin: 10px 16%;
    }
    .tabPanel{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
`

export default function Corporais(){
    return(
        <CorporaisStyled>
            <h1>Tratamentos</h1>
            <Tab.Group>
                <Tab.List className={'tabList'}>
                    {corporais.map((tratamento) => {
                        return(
                            <Tab className={'tab'} >
                                <TreatmentBtn title={tratamento.nome} />
                            </Tab>
                        )
                    })}
                </Tab.List>
                <Tab.Panels className='tabPanels'>
                    <Tab.Panel className='tabPanel'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cupiditate aliquam maxime praesentium soluta error qui vero, pariatur quasi dolorum. Quae, iure eligendi. Commodi quasi voluptatum voluptate fugiat exercitationem ipsa!
                    </Tab.Panel>
                    <Tab.Panel>
                        dsdasjdkajdkslaajkl
                    </Tab.Panel>
                    <Tab.Panel>
                        Content 3
                    </Tab.Panel>
                    <Tab.Panel>
                        Content 4
                    </Tab.Panel>
                    <Tab.Panel>
                        Content 5
                    </Tab.Panel>
                    <Tab.Panel>
                        Content 6
                    </Tab.Panel>
                    <Tab.Panel>
                        Content 7
                    </Tab.Panel>
                    <Tab.Panel className='tabPanel'>
                        {corporais[7].protocolos.map((protocolo) => {
                            return(
                                <ProtocolBox title={protocolo.name} />
                            )
                        })}
                    </Tab.Panel>
                    <Tab.Panel>
                        Content 4
                    </Tab.Panel>
                    <Tab.Panel>
                        Content 4
                    </Tab.Panel>
                    <Tab.Panel>
                        Content 4
                    </Tab.Panel>
                    <Tab.Panel>
                        Content 4
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </CorporaisStyled>
    )
}