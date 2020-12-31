import styled from 'styled-components';
import { ReactComponent as ArrowDownIcon } from '../icons/arrowDown.svg';

const StyledProvinceSelector = styled.div`
    position: relative;
`;

const StyledProvinceSelectorInput = styled.input`
    background-color: white;
    padding: 10px 12px;
    color: var(--color-dark);
    width: 100%;
    border: none;
    appearance: none;
    outline: none;
    font-size: 1rem;
    box-shadow: 0px 0px 2px 1px rgba(53,53,53,0.1);
    border-radius: 7px;
    &:focus {
        box-shadow: 0px 0px 0px 2px rgba(53.53,53,0.2);
    }
`;

const StyledIconWrapper = styled.span`
    position: absolute;
    right: 0px;
    top: 0px;
    margin: 5px;
    & svg {
        width: 32px;
        height: auto;
        fill: var(--color-dark-softer);
    }
`;

const StyledProvinceOptions = styled.ul`
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    display: ${props => props.isActive ? 'block' : 'none'};
    position: absolute;
    z-index: 10;
    background-color: white;
    border-radius: 10px;
    width: 100%;
    height: auto;
    box-shadow: 0px 2px 5px 0px rgba(53,53,53,0.1);
`;

const StyledProvinceSelectorItem = styled.li`
    padding: 7.5px 10px 7.5px 10px;
    color: var(--color-dark-softer);
    cursor: pointer;
    &:first-child {
        padding-top: 7.5px;
    }
    &:hover {
        background-color: var(--color-dark);
        color: white;
    }
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
                <ArrowDownIcon>
                </ArrowDownIcon>
            </StyledIconWrapper>
        </StyledProvinceSelector>
    )
}

export default ProvinceSelector;
