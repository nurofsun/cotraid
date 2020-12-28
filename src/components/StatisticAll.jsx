import { useState, useEffect } from 'react';
import { getDataAllProvince } from '../utils/ajax.util.js';

// components
import Statistic from './Statistic.jsx';
import Row from './Row.jsx';
import Column from './Column.jsx';

function StatisticAll() {
    const [ fetchData, setFetchData ] = useState(null);
    const [ fetchError, setFetchError ] = useState(null);

    useEffect(() => {
        getDataAllProvince()
            .then(result => {
                console.log(result)
                setFetchData(result)
            })
            .catch(err => setFetchError(err));
    }, [])

    return (
        <Statistic>
            <div className="overall">
                {
                    fetchData &&
                    (
                        <Row multiline>
                            <Column size="4">
                                <div className="overall-item">
                                    <h6>Positif</h6>
                                    <p>{fetchData.positif}</p>
                                </div>
                            </Column>
                            <Column size="4">
                                <div className="overall-item">
                                    <h6>Dirawat</h6>
                                    <p>{fetchData.dirawat}</p>
                                </div>
                            </Column>
                            <Column size="4">
                                <div className="overall-item">
                                    <h6>Sembuh</h6>
                                    <p>{fetchData.sembuh}</p>
                                </div>
                            </Column>
                            <Column size="4">
                                <div className="overall-item">
                                    <h6>Meninggal</h6>
                                    <p>{fetchData.meninggal}</p>
                                </div>
                            </Column>
                        </Row>
                    )
                }
                {
                    fetchError && (<p>{fetchError}</p>)
                }
            </div>
        </Statistic>
    )
}

export default StatisticAll;
