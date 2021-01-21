import tw, { styled } from 'twin.macro';

const StyledContainer = styled.div`
    ${tw`max-w-screen-lg mx-auto px-4 pt-3`}
`;

function Container({ children }) {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}
export default Container;
