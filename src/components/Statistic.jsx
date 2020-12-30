import styled from 'styled-components';

// components
import StatisticContainer from './StatisticContainer.jsx';
import StatisticByProvince from './StatisticByProvince.jsx';
import StatisticAll from './StatisticAll.jsx';


const StyledStatistic = styled.section`
    & header {
        padding: 10px 0px 0px 0px;
    }
    & h2 {
        font-size: 2rem;
        font-weight: 500;
        color: white;
    }
    @media (min-width: 768px) {
        & h2 {
            color: var(--color-dark);
        }
    }
`;

function Statistic() {
    return (
        <StyledStatistic>
            <header>
                <h2>Statistic</h2>
            </header>
            <StatisticByProvince/>
            <StatisticAll/>
        </StyledStatistic>
    )
}

export default Statistic;
