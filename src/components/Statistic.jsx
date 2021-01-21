import tw, { styled } from 'twin.macro';
// components
import Title from './Title.jsx';
import Row from './Row.jsx';
import Column from './Column.jsx';
import StatisticByProvince from './StatisticByProvince.jsx';
import StatisticAll from './StatisticAll.jsx';
import Footer from './Footer.jsx';

const StyledStatisticHeader = styled.header`
    ${tw`mb-3`}
`;

function Statistic() {
    return (
        <section>
            <StyledStatisticHeader>
                <Title text="Statistic"/>
            </StyledStatisticHeader>
            <Row>
                <Column size="two">
                    <StatisticAll/>
                </Column>
                <Column size="ten">
                    <StatisticByProvince/>
                    <Footer>
                        Cotraid &copy; 2021 
                    </Footer>
                </Column>
            </Row>
        </section>
    )
}

export default Statistic;
