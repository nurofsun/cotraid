import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 100%;
    padding: 0px 15px 15px 15px;
    border-radius: 10px;
    @media (min-width: 1080px) {
        max-width: 1080px;
        margin: 0px auto;
        flex-shrink: 0;
        flex-grow: 1;
    }
`;

function Container({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}
export default Container;
