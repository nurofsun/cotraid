import tw, { styled } from 'twin.macro';

const StyledFooter = styled.footer`
    ${tw`py-10 text-center`}
`;

const StyledFooterText = styled.p`
   ${tw`text-gray-100 text-opacity-50 text-base`} 
`

function Footer({ children }) {
    return (
        <StyledFooter>
            <StyledFooterText>
                { children }
            </StyledFooterText>
        </StyledFooter>
    )
}

export default Footer;
