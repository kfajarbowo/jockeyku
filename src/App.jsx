import React from 'react'
import styled, { css } from "styled-components";
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Feature from './components/Feature';
import Service from './components/Service';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    position: relative;
    `
const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`
 
const IntoShape = styled.div`
    ${Shape}
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 72% 100%);
    background-color: #ff8fa3;
`

const FeatureShape = styled.div`
    ${Shape}
    clip-path: polygon(72% 0, 100% 0, 100% 100%, 94% 100%);
    background-color: #ff8fa3;
`
const ServiceShape = styled.div`
    ${Shape}
    clip-path: polygon(94% 0, 100% 0, 100% 100%, 100% 28%);
    background-color: #ff8fa3;
`


const App = () => {
    // const smallScreen = window.screen.width <= 480 ? true : false;

    return (
        <>
            <Container>
                <Navbar />
                <Intro />
                <IntoShape />
            </Container>

            <Container>
                <Feature />
                <FeatureShape />
            </Container>

            <Container>
                <Service />
                <ServiceShape/>
            </Container>

            <Container>
                <Price/>
            </Container>

            <Container>
                <Contact/>
                <Footer/>
            </Container>

        </>
    )
}

export default App;
