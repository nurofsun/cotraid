import { useState, useEffect } from 'react';
import { getDataByProvince } from '../utils/ajax.util';

function ProvinceStatisticContent({province, kasus, dirawat, sembuh, meninggal}) {
    return (
        <>
            <h3>{province}</h3>
            <div className="card">
                <h3>Kasus</h3>
                {kasus}
            </div>

            <div className="card">
                <h3>Dirawat</h3>
                {dirawat}
            </div>

            <div className="card">
                <h3>Sembuh</h3>
                {sembuh}
            </div>

            <div className="card">
                <h3>Meninggal</h3>
                {meninggal}
            </div>
        </>
    )
}
function ProvinceStatistic() {
    const [ province, setProvince ] = useState(0);
    const [ data, setData ] = useState([]);
    const [ selectedProvinceData, setSelectedProvinceData ] = useState({});

    useEffect(() => {
        getDataByProvince()
            .then(result => setData(result))
            .catch(err => console.log(err));
        setSelectedProvinceData(data[province]);
    }, [])

    useEffect(() => {
        setSelectedProvinceData(data[province]);
    }, [province])

    const provinceSelector = (event) => {
        setProvince(event.target.value);
    }
    return (
        <section className="Statistic ByProvince">
            <header>
                <h3>By Province</h3>
                <select name="province" value={province} onChange={provinceSelector}>
                    { data && 
                            data.map((item,index) => <option key={item.provinsi} value={index}>{item.provinsi}</option>)
                    }
                </select>
            </header>
            <div className="content">
                {
                    selectedProvinceData && 
                    <ProvinceStatisticContent 
                        province={selectedProvinceData.provinsi} 
                        kasus={selectedProvinceData.kasus}
                        dirawat={selectedProvinceData.dirawat}
                        sembuh={selectedProvinceData.sembuh}
                        meninggal={selectedProvinceData.meninggal}/>
                }
            </div>
        </section>
    )
}

export default ProvinceStatistic;
