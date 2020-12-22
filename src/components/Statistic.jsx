import { useState, useEffect } from 'react';
import { getDataAllProvince, getDataByProvince } from '../utils/ajax.util.js';

// components
import Tab from './Tab.jsx';
import TabItem from './TabItem.jsx';
import Container from './Container.jsx';
import StatisticContent from './StatisticContent.jsx';

function Statistic({title}) {
    const [ statisticType, setStatisticType ] = useState('province');
    const [ allData, setAllData ] = useState({});
    const [ allProvinceData, setAllProvinceData ] = useState([]);
    const [ provinceData, setProvinceData ] = useState({});
    const [ provinceIndex, setProvinceIndex ] = useState(0);

    useEffect(() => {
        setProvinceData(allProvinceData[provinceIndex])
    }, [allProvinceData,provinceIndex]);

    useEffect(() => {
        if (statisticType === 'all') {
            getDataAllProvince()
                .then(result => setAllData(result))
                .catch(err => console.log(err))
        }
        else {
            getDataByProvince()
                .then(result => setAllProvinceData(result))
                .catch(err => console.log(err));
        }
    }, [statisticType])

    const handleButtonClick = (type) => {
        setStatisticType(type)
    }

    const handleSelectProvince = (event) => {
        setProvinceIndex(event.target.value);
    }

    return (
        <Container>
            <section className="statistic">
                <header>
                    <h2>{title}</h2>
                    <Tab>
                        <TabItem text="All" onClick={(e) => handleButtonClick('all', e)}/>
                        <TabItem text="By Province" onClick={(e) => handleButtonClick('province', e)}/>
                    </Tab>
                    {
                        statisticType !== 'all' ?
                            (
                                <select 
                                    style={{ width: '100%', padding: '10px', appearance: 'none', backgroundColor: 'white', border: 'none' }}
                                    name="province-selector" value={provinceIndex} onChange={(e) => handleSelectProvince(e)}>
                                    {allProvinceData.map((item,index) => (
                                        <option key={item.provinsi} value={index}>{item.provinsi}</option>
                                    ))}
                                </select>
                            ) : ''
                    }
                </header>
                <div className="content">
                    {
                        statisticType === 'all' ? (<StatisticContent kasus={allData.positif} dirawat={allData.dirawat} sembuh={allData.sembuh} meninggal={allData.meninggal}/>) : (<StatisticContent {...provinceData}/>)
                    }
                </div>
            </section>
        </Container>
    )
}

export default Statistic;
