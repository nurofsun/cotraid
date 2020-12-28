import { useState, useEffect } from 'react';
import { getDataByProvince } from '../utils/ajax.util.js';

// components
import ProvinceSelector from './ProvinceSelector.jsx';
import Row from './Row.jsx';
import Column from './Column.jsx';
import Card from './Card.jsx';

function StatisticByProvince() {
    const [ fetchData, setFetchData ] = useState([]);
    const [ filterableFetchData, setFilterableFetchData ] = useState(null);
    const [ fetchError, setFetchError ] = useState(null);
    const [ dataProvince, setDataProvince ] = useState(null);
    const [ provinceIndex, setProvinceIndex ] = useState(0);
    const [ inputTextProvince, setInputTextProvince ] = useState('');
    const [ optionIsActive, setOptionIsActive ] = useState(false);

    useEffect(() => {
        getDataByProvince()
            .then(result => {
                console.log(result)
                setFetchData(result);
                setFilterableFetchData(result);
            })
            .catch(err => setFetchError(err));
    }, [])

    useEffect(() => {
        document.addEventListener('click', function(event) {
            setOptionIsActive(false)
        });
    },[])

    useEffect(() => {
        setDataProvince(fetchData[provinceIndex]);
    }, [fetchData, provinceIndex])

    const handleSelectorItemClick = (event) => {
        event.stopPropagation();
        setProvinceIndex(event.target.value);
        setInputTextProvince(event.target.textContent);
        setOptionIsActive(false);
    }

    const handleSelectorInputChange = (event) => {
        setInputTextProvince(event.target.value);
        let regex = new RegExp(event.target.value, 'i');
        let filtered = filterableFetchData.filter(item => {
            return regex.test(item.provinsi);
        })

        if (event.target.value === '' || filtered.length === 0) {
            setFilterableFetchData(fetchData);
        } else {
            setFilterableFetchData(filtered);
        }
    }

    const handleSelectorFocus = (event) => {
        event.stopPropagation();
        setOptionIsActive(true)
    }

    return (
        <div className="by-province">
            <ProvinceSelector
                inputOnChange={(e) => handleSelectorInputChange(e)}
                inputValue={inputTextProvince}
                inputOnClick={handleSelectorFocus}
                itemOnClick={(e) => handleSelectorItemClick(e)}
                optionIsActive={optionIsActive}
                options={filterableFetchData}/>
            {dataProvince && (
            <Row multiline>
                <Column size="2">
                    <Card title="Kasus" value={dataProvince.kasus}/>
                </Column>
                <Column size="2">
                    <Card title="Dirawat" value={dataProvince.dirawat}/>
                </Column>
                <Column size="2">
                    <Card title="Sembuh" value={dataProvince.sembuh}/>
                </Column>
                <Column size="2">
                    <Card title="Meninggal" value={dataProvince.meninggal}/>
                </Column>
            </Row>
            )}
            {fetchError && (
                <p>{fetchError}</p>
            )}
        </div>
    )
}

export default StatisticByProvince;
