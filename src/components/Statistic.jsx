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
    const [ isTabActive, setIsTabActive ] = useState({ all: false, byProvince: false })

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

    useEffect(() => {
        if (statisticType === 'all') {
            setIsTabActive({...isTabActive, all: true })
        }
        else {
            setIsTabActive({...isTabActive, byProvince: true })
        }
    }, [])

    const handleButtonClick = (type) => {
        if (type === 'all') {
            setStatisticType(type)
            setIsTabActive({...isTabActive, all: true, byProvince: !isTabActive.byProvince })
        }
        else {
            setStatisticType(type)
            setIsTabActive({...isTabActive, byProvince: true, all: !isTabActive.all })
        }
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
        else {
            return (
                <StatisticContent {...provinceData}/>
            )
        }
    }

    return (
        <Container>
            <section className="statistic">
                <header style={{ padding: '15px 10px' }}>
                    <h2 style={{ marginTop: '0px', marginRight: '0px', marginLeft: '0px', marginBottom: '10px'}}>{title}</h2>
                    <Tab>
                        <TabItem text="ALL" onClick={(e) => handleButtonClick('all', e)} isActive={isTabActive.all}/>
                        <TabItem text="BY PROVINCE" onClick={(e) => handleButtonClick('province', e)} isActive={isTabActive.byProvince}/>
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
