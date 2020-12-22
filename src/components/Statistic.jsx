import { useState, useEffect } from 'react';
import { getDataAllProvince, getDataByProvince } from '../utils/ajax.util.js';

// components
import Tab from './Tab.jsx';
import TabItem from './TabItem.jsx';
import Container from './Container.jsx';
import StatisticContent from './StatisticContent.jsx';
import SelectProvince from './SelectProvince.jsx';


function Statistic({ title }) {
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

    const StatisticManager = () => {
        if (statisticType === 'all') {
            return (
                <StatisticContent kasus={allData.positif} 
                    dirawat={allData.dirawat} 
                    sembuh={allData.sembuh} 
                    meninggal={allData.meninggal}/>
            )
        }
        return (
            <StatisticContent {...provinceData}/>
        )
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
                                <SelectProvince 
                                    value={provinceIndex} 
                                    provinces={allProvinceData} 
                                    onSelectProvinceChange={(e) => handleSelectProvince(e)}/>
                            ) : ''
                    }
                </header>
                {StatisticManager()}
            </section>
        </Container>
    )
}

export default Statistic;
