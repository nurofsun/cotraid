import tw, { styled } from 'twin.macro';
import { useState, useEffect } from 'react';
import { getDataAllProvince } from '../utils/ajax.util.js';
// components
import Card from './Card.jsx';
import Subtitle from './Subtitle.jsx';

const StyledStatisticAll = styled.section`
    ${tw`md:mr-2 pt-1`}
`;

const StyledStatisticAllCard = styled(Card)`
    ${tw`mb-3 text-left px-3 py-2 border border-yellow-500`}
`;


function StatisticAll() {
    const [ fetchData, setFetchData ] = useState(null);
    const [ fetchError, setFetchError ] = useState(null);

    useEffect(() => {
        getDataAllProvince()
            .then(result => {
                setFetchData(result)
            })
            .catch(err => setFetchError(err));
    }, [])

    return (
        <StyledStatisticAll>
            <header>
                <Subtitle text="Overall"/>
            </header>
                { fetchData && (
                    <>
                        <StyledStatisticAllCard title="Cases" value={fetchData.positif}/>
                        <StyledStatisticAllCard title="Active" value={fetchData.dirawat}/>
                        <StyledStatisticAllCard title="Recovered" value={fetchData.sembuh}/>
                        <StyledStatisticAllCard title="Deaths" value={fetchData.meninggal}/>
                    </>
                ) 
                }
                {
                    fetchError && (<p>{fetchError}</p>)
                }
        </StyledStatisticAll>
    )
}

export default StatisticAll;
