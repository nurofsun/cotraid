import Statistic from './components/Statistic.jsx';
import StatisticOverview from './components/StatisticOverview.jsx';
import StatisticByProvince from './components/StatisticByProvince.jsx';

function App() {
  return (
    <div className="App">
        <Statistic title="Statistik Terbaru">
            <StatisticOverview/>
        </Statistic>
        <Statistic title="Berdasarkan Provinsi">
            <StatisticByProvince/>
        </Statistic>
    </div>
  );
}

export default App;
