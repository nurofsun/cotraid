import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getDataAllProvince } from '../utils/ajax.util.js';

const StyledOverAll = styled.section`
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 5px 10px 0px rgba(53,53,53,0.2);
    padding: 10px 15px;
    & .title {
        margin-bottom: 10px;
        font-size: 1.5rem;
        margin-top: 0px;
        font-weight: bold;
        color: var(--color-dark);
    }
    & h6 {
        color: var(--color-dark);
        font-size: 1.2rem;
        margin-bottom: 5px;
    }
    & p {
        font-size: 1.2rem;
        color: var(--color-dark-softer);
    }
    & .overall-statistic {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    & .overall-column {
        width: 50%;
    }
    & .overall-item {
        padding: 10px;
        margin-right: 5px;
    }
    & .overall-item::last-child {
        margin-right: 0px;
    }

    @media (min-width: 768px) {
        .overall-column {
            width: auto;
        }
    }
`;

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
        <StyledOverAll>
                <header>
                    <h3 className="title">Overall</h3>
                </header>
                {
                    fetchData &&
                    (
                        <div className="overall-statistic">
                            <div class="overall-column">
                                <div className="overall-item">
                                    <h6>Positif</h6>
                                    <p>{fetchData.positif}</p>
                                </div>
                            </div>
                            <div class="overall-column">
                                <div className="overall-item">
                                    <h6>Dirawat</h6>
                                    <p>{fetchData.dirawat}</p>
                                </div>
                            </div>
                            <div class="overall-column">
                                <div className="overall-item">
                                    <h6>Sembuh</h6>
                                    <p>{fetchData.sembuh}</p>
                                </div>
                            </div>
                            <div class="overall-column">
                                <div className="overall-item">
                                    <h6>Meninggal</h6>
                                    <p>{fetchData.meninggal}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    fetchError && (<p>{fetchError}</p>)
                }
        </StyledOverAll>
    )
}

export default StatisticAll;
