import tw, { styled } from 'twin.macro';
// components
import logoSrc from './logo.svg';
import Navbar from './components/Navbar.jsx';
import Container from './components/Container.jsx';
import Statistic from './components/Statistic.jsx';

const StyledApp = styled.div`
    ${tw`bg-gray-900 md:h-screen md:overflow-y-hidden`}
`;

const StyledLogo = styled.img`
    ${tw`w-64 h-auto`}
`;

function App() {
    return (
        <StyledApp className="App">
            <Navbar>
                <StyledLogo src={logoSrc} alt="Cotraid"/>
            </Navbar>
            <Container>
                <Statistic/>
            </Container>
        </StyledApp>
    );
}

export default App;
