import styled from 'styled-components';

const StyledSelect = styled.select`
    appearance: none;
    padding: 7px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    background-color: white;
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
