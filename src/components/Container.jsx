import styled from 'styled-components';

const StyledContainer = styled.div`
    max-width: 1080px;
    margin: 0px auto;
    padding: 15px;
    border-radius: 10px;
    flex-shrink: 0;
    flex-grow: 1;
    background-color: #fcfcfc;
    box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.05);
`;

function Container({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}
export default Container;
