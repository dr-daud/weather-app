import Header from '../header/header';
import Info from '../info/info';
import Forecast from '../forecast/forecast';
import Spinner from '../../assets/Spinner';
import { RootState } from '../../state/store';
import { useSelector } from 'react-redux';

import './App.scss'

function App() {

    const store = useSelector((state: RootState) => state.weather);

    return (
        <main className='app'>
            {store.userPermition ?
                (<div className='error'>Please allow location access to see the weather</div>) :
                (store.status === 'loading' ? (<Spinner />) :
                    (<>
                        <Header />
                        <Info />
                        <Forecast />
                    </>)
                )}
        </main>
    )
}

export default App
