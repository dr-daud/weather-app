import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useEffect } from 'react';
import { fetchWeather, setPermitionTrue } from '../../state/weather/weatherSlice'

import './header.scss';
import location from '../../assets/Location.png';
import downArr from '../../assets/DownArr.png';
import bell from '../../assets/Bell.png';
import point from '../../assets/Point.png'

const Header = () => {
    const dispatch: AppDispatch = useDispatch();
    const store = useSelector((state: RootState) => state.weather);

    const handleFetchWeather = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    dispatch(fetchWeather({ latitude, longitude }))
                },
                (error) => {
                    if (error.code === 1) {
                        dispatch((setPermitionTrue()))
                    }
                }
            )
        }
    }

    useEffect(() => {
        if (store.status === 'idle') {
            handleFetchWeather()
        }
    }, []);

    return (
        <div className="header_wrap">
            <div className="location">
                <div><img src={location} alt="location_icon" /></div>
                <div className="city">{store.name}</div>
                <div><img src={downArr} alt="down_arrow" className='down_arr' /></div>
            </div>
            <div className="bell">
                <img src={bell} alt="bell_icon" />
                <img src={point} alt="" className='point' />
            </div>
        </div>
    )
}

export default Header;