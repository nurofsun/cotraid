import styled from 'styled-components';
import './css/minireset.css';
import './App.css';

import Container from './components/Container.jsx';
import Row from './components/Row.jsx';
import Column from './components/Column.jsx';
import StatisticContainer from './components/StatisticContainer.jsx';
import StatisticAll from './components/StatisticAll.jsx';
import StatisticByProvince from './components/StatisticByProvince.jsx';

const StyledApp = styled.main`
    background-color: var(--bg-body);
    height: 100vh;
`;


function App() {
  return (
      <StyledApp className="App">
        <Container>
            <Row multiline>
                <Column size="2">
                    Title
                </Column>
                <Column size="2">
                    <StatisticContainer title="By Province">
                        <StatisticByProvince/>
                    </StatisticContainer>
                    <StatisticContainer title="Overall">
                        <StatisticAll/>
                    </StatisticContainer>
                </Column>
            </Row>
        </Container>
      </StyledApp>
  );
}

export default App;
