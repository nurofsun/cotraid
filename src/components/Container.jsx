import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 1080px;
    margin: 0px auto;
    padding: 0px 15px;
`;

function Container({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}
export default Container;
