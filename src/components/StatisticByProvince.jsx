import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getDataByProvince } from '../utils/ajax.util.js';

// components
import ProvinceSelector from './ProvinceSelector.jsx';
import Row from './Row.jsx';
import Column from './Column.jsx';
import Card from './Card.jsx';

const WarningCard = styled(Card)`
    background-color: var(--color-warning-softer);
    color: var(--color-warning);
    border: 1px solid var(--color-warning);
`;

const DangerCard = styled(Card)`
    background-color: var(--color-danger-softer);
    color: var(--color-danger);
    border: 1px solid var(--color-danger);
`;

const SuccessCard = styled(Card)`
    background-color: var(--color-success-softer);
    color: var(--color-success);
    border: 1px solid var(--color-success);
`;

const InfoCard = styled(Card)`
    background-color: var(--color-info-softer);
    color: var(--color-info);
    border: 1px solid var(--color-info);
`;

const StyledStatisticByProvince = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px;
    & > header > .title {
        font-weight: bold;
        font-size: 1rem;
        text-transform: uppercase;
        text-align: left !important;
        margin-bottom: 10px;
        color: white;
    }
    @media (min-width: 768px) {
        & > header > .title {
            color: var(--color-dark);
        }
    }
`;

function StatisticByProvince() {
    const [ fetchData, setFetchData ] = useState([]);
    const [ filterableFetchData, setFilterableFetchData ] = useState([]);
    const [ fetchError, setFetchError ] = useState('');
    const [ dataProvince, setDataProvince ] = useState({});
    const [ inputTextProvince, setInputTextProvince ] = useState('');
    const [ optionIsActive, setOptionIsActive ] = useState(false);

    useEffect(() => {
        getDataByProvince()
            .then(result => {
                setFetchData(result);
                setFilterableFetchData(result);
                setDataProvince(result[0]);
                setInputTextProvince(result[0].provinsi);
            })
            .catch(err => setFetchError(err));
    }, [])

    useEffect(() => {
        document.addEventListener('click', function(event) {
            setOptionIsActive(false)
        });
    },[])

    const handleSelectorItemClick = (event) => {
        event.stopPropagation();
        setDataProvince(filterableFetchData[event.target.value])
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

    const handleSelectorClick = (event) => {
        event.stopPropagation();
        setOptionIsActive(true)
    }

    return (
        <StyledStatisticByProvince>
            <header>
                <h3 className="title">
                    By Province
                </h3>
            </header>
            <ProvinceSelector
                inputOnChange={(e) => handleSelectorInputChange(e)}
                inputValue={inputTextProvince}
                inputOnClick={handleSelectorClick}
                itemOnClick={(e) => handleSelectorItemClick(e)}
                optionIsActive={optionIsActive}
                options={filterableFetchData}/>
            {dataProvince && (
            <Row multiline style={{ marginTop: '10px'}}>
                <Column size="2">
                    <WarningCard title="Cases" value={dataProvince.kasus}/>
                </Column>
                <Column size="2">
                    <InfoCard title="Active" value={dataProvince.dirawat}/>
                </Column>
                <Column size="2">
                    <SuccessCard title="Recovered" value={dataProvince.sembuh}/>
                </Column>
                <Column size="2">
                    <DangerCard title="Deaths" value={dataProvince.meninggal}/>
                </Column>
            </Row>
            )}
            {fetchError && (
                <p>{fetchError}</p>
            )}
        </StyledStatisticByProvince>
    )
}

export default StatisticByProvince;
