import styled from 'styled-components';

const StyledStatisticContainer = styled.section`
    padding: 10px 15px;
`;

function StatisticContainer({children}) {
    return (
        <StyledStatisticContainer>
            {children}
        </StyledStatisticContainer>
    )
}
export default StatisticContainer;
