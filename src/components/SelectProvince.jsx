import React from 'react';
import styled from 'styled-components';

import { ReactComponent as ArrowDownIcon } from '../icons/arrowDown.svg';

const StyledSelectContainer = styled.div`
    border: 1px solid rgba(0,0,0,0.2);
    overflow: hidden;
    border-radius: 7px;
    position: relative;
`;

const StyledSelect = styled.select`
    appearance: none;
    background: transparent;
    padding: 10px;
    width: 100%;
    heigth: 100%;
    border: none;
`;

const StyledSelectIcon = styled.span`
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 10px;
    display: inline-block;
`;

function SelectProvince({ onSelectProvinceChange, provinces, ...restProps }) {
    return (
        <StyledSelectContainer>
            <StyledSelect onChange={onSelectProvinceChange} {...restProps}>
                {provinces.map((item,index) => (
                    <option key={item.provinsi} value={index}>{item.provinsi}</option>
                ))}
            </StyledSelect>
            <StyledSelectIcon>
                <ArrowDownIcon/>
            </StyledSelectIcon>
        </StyledSelectContainer>
    )
}

export default SelectProvince;
