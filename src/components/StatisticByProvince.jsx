import tw, { styled } from 'twin.macro';
import { useState, useEffect } from 'react';
import { getDataByProvince } from '../utils/ajax.util.js';

// components
import Row from './Row.jsx';
import Column from './Column.jsx';
import Subtitle from './Subtitle.jsx';
import ProvinceSelector from './ProvinceSelector.jsx';
import Card from './Card.jsx';

const WarningCard = styled(Card)`
    ${tw`bg-yellow-50 border border-yellow-100 bg-gray-800 rounded-md md:m-2 mb-2`}
`;

const DangerCard = styled(Card)`
    ${tw`bg-gray-800 rounded-md overflow-hidden md:m-2 mb-2`}
`;

const SuccessCard = styled(Card)`
    ${tw`bg-gray-800 rounded-md overflow-hidden md:m-2 mb-2`}
`;

const InfoCard = styled(Card)`
    ${tw`bg-gray-800 rounded-md overflow-hidden md:m-2 mb-2`}
`;

const StyledHeader = styled.header`
    ${tw`md:px-3 flex flex-row items-center justify-between flex-wrap mb-3 md:mb-0`}
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
        <section>
            <StyledHeader>
                <Subtitle text="By Province"/>
                <ProvinceSelector
                    inputOnChange={(e) => handleSelectorInputChange(e)}
                    inputValue={inputTextProvince}
                    inputOnClick={handleSelectorClick}
                    itemOnClick={(e) => handleSelectorItemClick(e)}
                    optionIsActive={optionIsActive}
                    options={filterableFetchData}/>
            </StyledHeader>
            {dataProvince && (
            <Row>
                <Column size="six">
                    <WarningCard size="large" title="Cases" value={dataProvince.kasus}/>
                </Column>
                <Column size="six">
                    <InfoCard size="large" title="Active" value={dataProvince.dirawat}/>
                </Column>
                <Column size="six">
                    <SuccessCard size="large" title="Recovered" value={dataProvince.sembuh}/>
                </Column>
                <Column size="six">
                    <DangerCard size="large" title="Deaths" value={dataProvince.meninggal}/>
                </Column>    
            </Row>
            )}
            {fetchError && (
                <p>{fetchError}</p>
            )}
        </section>
    )
}

export default StatisticByProvince;
