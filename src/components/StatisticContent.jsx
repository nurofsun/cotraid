import Row from './Row.jsx';
import Column from './Column.jsx';
import Card from './Card.jsx';

function StatisticContent({ title, kasus, dirawat, sembuh, meninggal}) {
    return (
        <>
            <h3>{title}</h3>
            <Row multiline>
                <Column size="4">
                    <Card title="Kasus" value={kasus}></Card>
                </Column>
                <Column size="4">
                    <Card title="Dirawat" value={dirawat}></Card>
                </Column>
                <Column size="4">
                    <Card title="Sembuh" value={sembuh}></Card>
                </Column>
                <Column size="4">
                    <Card title="Meninggal" value={meninggal}></Card>
                </Column>
            </Row>
        </>
    )
}

export default StatisticContent;
