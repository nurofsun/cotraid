import tw, { styled } from 'twin.macro';

const StyledSubtitle = styled.h2`
    ${tw`text-lg md:text-xl mb-2 text-gray-100 font-bold uppercase`}
`;

function Title({ text }) {
    return (
        <StyledSubtitle>
            {text}
        </StyledSubtitle>
    )
}

export default Title;
