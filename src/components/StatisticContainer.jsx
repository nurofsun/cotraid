import styled from 'styled-components';

const StyledStatisticContainer = styled.section`
    padding: 15px;
`;

function StatisticContainer({children, title}) {
    return (
        <StyledStatisticContainer>
            <header>
                <h3>{title}</h3>
            </header>
            {children}
        </StyledStatisticContainer>
    )
}
export default StatisticContainer;
