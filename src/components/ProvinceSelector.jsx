import tw, { styled } from 'twin.macro';
import { ReactComponent as ArrowDownIcon } from '../icons/arrowDown.svg';

const StyledProvinceSelector = styled.div`
    ${tw`relative border border-yellow-500`}
`;

const StyledProvinceSelectorInput = styled.input`
    ${tw`bg-gray-800 text-gray-100 py-3
    pl-4 pr-2 border-none outline-none rounded-md
    shadow-md text-base appearance-none focus:bg-gray-600`}
`;

const StyledIconWrapper = styled.span`
    ${tw`absolute right-0 top-0 p-1 fill-current text-gray-100`} 
`;

const StyledArrowDownIcon = styled(ArrowDownIcon)`
    ${tw`w-10 h-auto`}
`

const StyledProvinceOptions = styled.ul(({isActive}) => [
    tw`absolute bg-gray-800 text-gray-100 hidden
    overflow-auto shadow-md max-h-56`,
    isActive && tw`block`
])

const StyledProvinceSelectorItem = styled.li`
    ${tw`p-3 text-gray-100`}
`;


function ProvinceSelector({ options, inputOnChange, inputOnClick, inputOnBlur, itemOnClick, inputValue, optionIsActive }) {
    return (
        <StyledProvinceSelector>
            <StyledProvinceSelectorInput type="text" onClick={inputOnClick} onChange={inputOnChange} value={inputValue}/>
            <StyledProvinceOptions isActive={optionIsActive}>
                {
                    options &&
                    options.map((item, index) => (
                        <StyledProvinceSelectorItem onClick={itemOnClick} key={item.provinsi} value={index}>{item.provinsi}</StyledProvinceSelectorItem>
                    ))
                }
            </StyledProvinceOptions>
            <StyledIconWrapper>
                <StyledArrowDownIcon/>
            </StyledIconWrapper>
        </StyledProvinceSelector>
    )
}

export default ProvinceSelector;
