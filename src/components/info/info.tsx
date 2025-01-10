import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import dayjs from "dayjs"

import './info.scss';
import wind from '../../assets/Wind.png';
import hum from '../../assets/Hum.png'

const Info = () => {
    const store = useSelector((state: RootState) => state.weather);
    const iconUrl = `http://openweathermap.org/img/w/${store.icon}.png`
    let seconds = store.dt
    let date = seconds ? dayjs(seconds * 1000).format('MMMM D') : '';

    return (
        <>
            <div className="weather_icon"><img src={iconUrl} alt="sun" className='sun' /></div>
            <div className="main_info_wrap">
                <div className="date">{date}</div>
                <div className="temperature">{store.temp?.toFixed()}°</div>
                <div className="weather">{store.main}</div>
                <div className="wind_wrap">
                    <div className="wind_icon">
                        <img src={wind} alt="wind_icon" />
                    </div>
                    <div className="wind_descr">Wind</div>
                    <div className="wind_speed">{store.wind} km/h</div>
                </div>
                <div className="hum_wrap">
                    <div className="hum_icon">
                        <img src={hum} alt="hum_icon" />
                    </div>
                    <div className="hum_descr">Hum</div>
                    <div className="hum_percent">{store.hum} %</div>
                </div>
                <div className="hum_wrap"></div>
            </div>
        </>
    )
}

export default Info;