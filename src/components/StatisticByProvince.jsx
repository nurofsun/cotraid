import { useState, useEffect } from 'react';
import { getDataByProvince } from '../utils/ajax.util.js';

// components
import Row from './Row.jsx';
import Column from './Column.jsx';
import Card from './Card.jsx';

function StatisticByProvince() {
    const [ provinceIndex, setProvinceIndex ] = useState(0);
    const [ data, setData ] = useState([]);
    const [ provinceData, setProvinceData ] = useState({});

    useEffect(() => {
        getDataByProvince()
            .then(result => setData(result))
            .catch(err => console.log(err));
    },[])

    useEffect(() => {
        setProvinceData(data[provinceIndex]);
    }, [data,provinceIndex])

    const handleSelectProvince = (event) => {
        setProvinceIndex(event.target.value)
    }

    return (
        <div className="by-province">
            <header style={{ marginBottom: '15px', padding: '10px' }}>
                <select value={provinceIndex} 
                    onChange={(e) => handleSelectProvince(e)}
                    name="province-selector">
                    { data && 
                        data.map((item,index) => (<option key={item.provinsi} value={index}>{item.provinsi}</option>))
                    }
                </select>
            </header>
            <Row multiline>
                <Column size="4">
                    <Card title="Kasus" value={provinceData.kasus}/>
                </Column>
                <Column size="4">
                    <Card title="Dirawat" value={provinceData.dirawat}/>
                </Column>
                <Column size="4">
                    <Card title="Sembuh" value={provinceData.sembuh}/>
                </Column>
                <Column size="4">
                    <Card title="Meninggal" value={provinceData.meninggal}/>
                </Column>
            </Row>
        </div>
    )
}

export default StatisticByProvince;
