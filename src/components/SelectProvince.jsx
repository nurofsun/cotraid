function SelectProvince({ onSelectProvinceChange, provinces }) {
    return (
        <select 
            style={{ width: '100%', padding: '10px', appearance: 'none', backgroundColor: 'white', border: 'none' }}
            name="province-selector" onChange={onSelectProvinceChange}>
            {provinces.map((item,index) => (
                <option key={item.provinsi} value={index}>{item.provinsi}</option>
            ))}
        </select>
    )
}

export default SelectProvince;
