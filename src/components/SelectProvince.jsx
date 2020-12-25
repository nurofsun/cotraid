import styled from 'styled-components';

const StyledSelect = styled.select`
    width: 100%;
    padding: 8px 7px;
    background-color: white;
    appearance: none;
    border: 2px solid rgba(0,0,0,0.1);
    border-radius: 7px;
`;

function SelectProvince({ onSelectProvinceChange, provinces, ...restProps }) {
    return (
        <StyledSelect onChange={onSelectProvinceChange} {...restProps}>
            {provinces.map((item,index) => (
                <option key={item.provinsi} value={index}>{item.provinsi}</option>
            ))}
        </StyledSelect>
    )
}

export default SelectProvince;
