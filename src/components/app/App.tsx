import Header from '../header/header';
import Info from '../info/info';
import Forecast from '../forecast/forecast';
import './App.scss'

function App() {
    return (
        <main className='app'>
            <Header />
            <Info />
            <Forecast />
        </main>
    )
}

export default App
