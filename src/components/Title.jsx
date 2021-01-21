import tw, { styled } from 'twin.macro';

const StyledTitle = styled.h2`
    ${tw`text-xl md:text-3xl mb-2 text-gray-100 font-bold`}
`;

function Title({ text }) {
    return (
        <StyledTitle>
            {text}
        </StyledTitle>
    )
}

export default Title;
