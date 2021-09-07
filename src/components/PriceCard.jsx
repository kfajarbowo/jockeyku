import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
    margin-right: 50px;
    box-shadow: 0px 0px 17px -8px rgba(0,0,0,0.57);
    -webkit-box-shadow: 0px 0px 17px -8px rgba(0,0,0,0.57);
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width:480px){
        margin-right: 0;
        margin-bottom: 10px;
        padding:10px;
    }

`
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`
const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
    @media only screen and (max-width:480px){
        font-size:30px;
    }
`
const Type = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: 1.5px solid crimson;
    color: crimson;
    background-color: white;
    border-radius: 20px;
    @media only screen and (max-width:480px){
       display:none;
    }
`
const List = styled.ul`
    list-style: none;
`
const ListItem = styled.li`
    margin: 30px 0;
    @media only screen and (max-width:480px){
        margin:10px;
        font-size: 12px;
    }
`
const Button = styled.button`
    border:none;
    background-color: #5352ED;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    @media only screen and (max-width:480px){
        font-size: 12px;
        padding: 10px;
    }
`
const PriceCard = ({price, type}) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
            </PriceContainer>
                <Type>{type}</Type>
                <List>
                    <ListItem>200 Hand crafted templates</ListItem>
                    <ListItem>Exclusive Support</ListItem>
                    <ListItem>Gua ganteng banget</ListItem>
                    <ListItem>Premium plugins</ListItem>
                </List>
                <Button>Join Now</Button>
        </Container>
    )
}

export default PriceCard
