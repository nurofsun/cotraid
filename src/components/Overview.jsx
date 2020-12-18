import { useState, useEffect } from 'react';
import { getDataAllProvince } from '../utils/ajax.util';

function CardOverview({ title, count }) {
    return (
        <article>
            <header>
                <h2>{title}</h2>
            </header>
            {count}
        </article>
    )
}
function Overview() {
    const [ allData, setAllData ] = useState([])

    useEffect(() => {
        getDataAllProvince().then(data => setAllData(data))
    }, [])

    return (
        <div className="Overview">
            <header>
                <h2>Statistik Terbaru</h2>
                <time>Diupdate pada: {new Date(allData.lastUpdate).toLocaleString()}</time>
            </header>
            <CardOverview title="Positif" count={allData.positif}>
            </CardOverview>
            <CardOverview title="Dirawat" count={allData.dirawat}>
            </CardOverview>
            <CardOverview title="Sembuh" count={allData.sembuh}>
            </CardOverview>
            <CardOverview title="Meninggal" count={allData.meninggal}>
            </CardOverview>
        </div>
    );
}

export default Overview;
