import { useState, useEffect } from 'react';
import { getDataAllProvince } from '../utils/ajax.util.js';

// components
import Card from './Card.jsx';
import Row from './Row';
import Column from './Column';

function StatisticOverview() {
    const [ data, setData ] = useState({});

    useEffect(() => {
        getDataAllProvince()
            .then(result => setData(result))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="overview">
            <Row multiline>
                <Column className="column" size="4">
                    <Card title="Positif" color="yellow" value={data.positif}></Card>
                </Column>
                <Column className="column" size="4">
                    <Card title="Dirawat" color="gray" value={data.dirawat}></Card>
                </Column>
                <Column className="column" size="4">
                    <Card title="Sembuh" color="green" value={data.sembuh}></Card>
                </Column>
                <Column className="column" size="4">
                    <Card title="Meninggal" color="red" value={data.meninggal}></Card>
                </Column>
            </Row>
        </div>
    )
}

export default StatisticOverview;
