import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 50px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-left: 5%; */
`;
const Logo = styled.h1`
    font-weight: bold;
    text-decoration:underline crimson;
`;
const Menu = styled.ul`
    display:flex;
    list-style: none;
    

    @media only screen and (max-width:480px){
        display: none;
    }

`;
const MenuItem = styled.li`
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
`;
const Button = styled.button`
    border: 2px solid crimson;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Logo>Jockeyku</Logo>
                        <Menu>
                            {/* <MenuItem>Home</MenuItem> */}
                            <MenuItem>Features</MenuItem>
                            <MenuItem>Services</MenuItem>
                            <MenuItem>Pricing</MenuItem>
                            <MenuItem>Contact</MenuItem>
                        </Menu>
                        </Left>
                    <Button>Join Now</Button>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar;
