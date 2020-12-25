import Row from './Row.jsx';
import Column from './Column.jsx';
import Card from './Card.jsx';

function StatisticContent({ title, kasus, dirawat, sembuh, meninggal}) {
    return (
        <>
            <h3>{title}</h3>
            <Row multiline>
                <Column size="4">
                    <Card title="Kasus" value={kasus} color="#FFEE53"></Card>
                </Column>
                <Column size="4">
                    <Card title="Dirawat" value={dirawat} color="#5379FF"></Card>
                </Column>
                <Column size="4">
                    <Card title="Sembuh" value={sembuh} color="#02E34F"></Card>
                </Column>
                <Column size="4">
                    <Card title="Meninggal" value={meninggal} color="#FF5368"></Card>
                </Column>
            </Row>
        </>
    )
}

export default StatisticContent;
