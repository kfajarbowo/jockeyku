import React,{useState} from 'react'
import styled from 'styled-components'
import How from '../img/how.png';
import MiniCard from './MiniCard';
import Play from '../img/play.png';
import AnimatedShapes from './AnimatedShapes';


const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    padding: 20px;
    /* justify-content: center; */
    @media only screen and (max-width:480px){
        flex-direction: column;
    }

`
const Left = styled.div`
    width:50%;
    @media only screen and (max-width:480px){
        width:100%;
    }
`

const Image = styled.img`
    height: 100%;
    width:80%;
    display: ${(props) => props.open && "none"};
    margin-left: 100px;
`

const Video = styled.iframe`
    display: ${(props) => !props.open && "none"};
    height: 300px;
    width: 560px;
    position: absolute;
    top: 0;
    bottom:0;
    margin: auto;
    @media only screen and (max-width:480px){
        width: 100%;
        
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;
    @media only screen and (max-width:480px){
        padding: 20px;
        width: 95%;
    }
`

const Right = styled.div`
    width:50%;
    @media only screen and (max-width:480px){
        display: none;
    }
`
const Title = styled.h1`
    margin-top: 50px;
`
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

const Button = styled.button`
    width: 180px;
    border: none;
    border-radius:10px;
    background-color: #5352ED;
    color: white;
    font-size: 20px;
    padding:15px;
    margin-top: 50px;
    cursor: pointer;
    display: flex;
    align-items: center; 
`
const CloseButton = styled.button`
    position: absolute;
    background-color: white;
    padding: 5px;
    border: none;
    border-radius: 5px;
    right: 5px;
    top: 30px;
`

const Icon = styled.img`
    width: 20px;
    margin-right: 10px;
    
`
const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
`
const Service = () => {
    const [open, setOpen] = useState(false);
    const smallScreen = window.screen.width <= 480 ? true : false;
    return (
        <Container>
            <Left>
                <Wrapper>
                    <Title>Clean Code Gampang Dimengerti</Title>
                    <Desc>Kita juga bakal bikin kalian ngerti sama tugas kalian, jangan
                        asal joki cuy, kasian gua sama lo masa ga dapet ilmu sama sekali, walaupun
                        gua juga seneng kalo kalian joki tugas disini terus
                    </Desc>
                    <CardContainer>
                        <MiniCard/>
                        <MiniCard/>
                        <MiniCard/>
                    </CardContainer>
                    <Button onClick={()=> setOpen(true)}>
                        <Icon src={Play}/>How it works
                    </Button>
                </Wrapper>
            </Left>
                <AnimatedShapes/>
            <Right>
                <Image open={open} src={How} />
                <Video open={open}
                       autoPlay
                       loop
                       controls
                       src="https://www.youtube.com/embed/7xouYq0UyRk" />
            </Right>
            {smallScreen && open &&(
                <Modal>
                   <Video open={open}
                       autoPlay
                       loop
                       controls
                       src="https://www.youtube.com/embed/7xouYq0UyRk" /> 
                       <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
                </Modal>
            )}
        </Container>
    )
}

export default Service
