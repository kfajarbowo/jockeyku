import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    /* background: linear-gradient(180deg, rgba(220, 20, 60, 0) 0%, #DC143C 39.06%); */
    
`
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    

`
const List = styled.ul`
    padding: 0;
    margin:0;
    list-style: none;
    display: flex;
`
const ListItem = styled.li`
    margin-right: 20px;
`
const Copyright = styled.span`
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
        font-size: 12px;
    }
`

const Footer = () => {
    return (
        <Container>
            <Wrapper>
               <List></List>
                <Copyright>Copyright &#169; 2021. All Right Reserved. Love From Depok</Copyright>
            </Wrapper>
        </Container>

    )
}

export default Footer
