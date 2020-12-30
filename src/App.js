import styled from 'styled-components';
import './css/minireset.css';
import './App.css';
import BannerSvg from './banner.svg';

import Container from './components/Container.jsx';
import Row from './components/Row.jsx';
import Column from './components/Column.jsx';
import Banner from './components/Banner.jsx';
import Statistic from './components/Statistic.jsx';

const StyledApp = styled.main`
    background-image: url(${BannerSvg});
    background-size: content;
    background-position: left;
    background-repeat: no-repeat;
    height: 100vh;
`;


function App() {
  return (
      <StyledApp className="App">
        <Container>
            <Row multiline>
                <Column size="2">
                    <Banner title="cotraid" desc="Get the new statistic COVID-19 for all provinces"/>
                </Column>
                <Column size="2">
                    <Statistic/>
                </Column>
            </Row>
        </Container>
      </StyledApp>
  );
}

export default App;
