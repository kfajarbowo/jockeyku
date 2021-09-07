import React from 'react'
import styled from 'styled-components'
import App from '../img/app.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    display: flex;
    @media only screen and (max-width:480px){
        flex-direction: column;
        padding: 30px 20px;
    }
`

const Left = styled.div`
    width: 50%;
    @media only screen and (max-width:480px){
        display: none;
    }
`

const Image = styled.img`
    width: 95%;
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width:480px){
        width:100%;
    }
`

const Title = styled.span`
    font-size: 70px;
    @media only screen and (max-width:480px){
        font-size: 50px;
    }
`
const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`
const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 30px;
`
const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    background-color: crimson;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
`

const Feature = () => {
    return (
        <Container>
            <Left><Image src={App}/></Left>
            <Right>
                <Title>
                    <b>Good </b>Game
                    <br/>
                    <b>Well</b> Played
                </Title>
                <SubTitle>Kita ini jago banget gaboong yang lain noob</SubTitle>
                <Desc>Kenapa si kita percaya diri kita jago banget? kita ini 
                    ngerjain tugasnya pake teknologi jaman sekarang bro bayangin temen temen lo
                    pake html css lo sendirian pake react , expressjs, dll, kita ini fandom JS bro jadi elite abiss
                </Desc>
                <Desc>Kita juga jago main mobel legen, terverikasi juara tingkat kampung</Desc>
                <Button>Learn More</Button>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Feature
