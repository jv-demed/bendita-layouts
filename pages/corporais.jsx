import styled from 'styled-components';
import { Tab } from '@headlessui/react'
import Box from '../src/components/Box';

const CorporaisStyled = styled.section`
    align-items: center;
    background-color: #471e4e;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`

export default function Corporais(){
    return(
        <CorporaisStyled>
            <Tab.Group>
                <Tab.List>
                    <Tab>
                        <Box title={'Celulite'} />
                    </Tab>
                    <Tab>
                        <Box title={'Estrias'} />
                    </Tab>
                    <Tab>
                        <Box title={'Flacidez'} />
                    </Tab>
                    <Tab>
                        <Box title={'Gordura Localizada'} />
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                    <Tab.Panel>Content 4</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </CorporaisStyled>
    )
}