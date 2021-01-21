import tw from 'twin.macro';

const TwinNavbar = tw.nav`
    flex flex-row
    bg-gray-900
    max-w-screen-lg
    mx-auto px-4 py-5
`;

function Navbar({children}) {
    return(
        <TwinNavbar>
            {children}
        </TwinNavbar>
    )
}

export default Navbar;
