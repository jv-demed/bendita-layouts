import styled from 'styled-components';
import { Tab } from '@headlessui/react'
import Box from '../src/components/Box';

const CorporaisStyled = styled.section`
    align-items: center;
    background-color: #471e4e;
    display: flex;
    flex-direction: column;
    font-family: 'Source Sans Pro', sans-serif;
    /* height: 100vh; */
    padding-bottom: 5%;
    padding-top: 5%;
    width: 100%;
    .tabList{
        display: flex;
        gap: 10px;
        justify-content: space-between;
        padding: 5px 16%;
        width: 100%;
        .tab{
            background-color: #331138;
            border: none;
            width: 100%;
        }
    }
    .tabPanels{
        background-color: white;
        border: 1px solid red;
        display: flex;
        margin: 10px 16%;
    }
`

export default function Corporais(){
    return(
        <CorporaisStyled>
            <Tab.Group>
                <Tab.List className={'tabList'}>
                    <Tab className={'tab'} >
                        <Box title={'Celulite'} />
                    </Tab>
                    <Tab className={'tab'}>
                        <Box title={'Estrias'} />
                    </Tab>
                    <Tab className={'tab'}>
                        <Box title={'Flacidez'} />
                    </Tab>
                    <Tab className={'tab'}>
                        <Box title={'Gordura Localizada'} />
                    </Tab>
                </Tab.List>
                <Tab.Panels className='tabPanels'>
                    <Tab.Panel>
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
                </Tab.Panels>
            </Tab.Group>
        </CorporaisStyled>
    )
}