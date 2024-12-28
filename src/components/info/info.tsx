import './info.scss';
import wind from '../../assets/Wind.png';
import hum from '../../assets/Hum.png'
import sun from '../../assets/Sun.png'

const Info = () => {
    return (
        <>
            <div className="weather_icon"><img src={sun} alt="sun" className='sun' /></div>
            <div className="main_info_wrap">
                <div className="date">Today, 12 September</div>
                <div className="temperature">35</div>
                <div className="weather">Cloudy</div>
                <div className="wind_wrap">
                    <div className="wind_icon">
                        <img src={wind} alt="wind_icon" />
                    </div>
                    <div className="wind_descr">Wind</div>
                    <div className="wind_speed">10 km/h</div>
                </div>
                <div className="hum_wrap">
                    <div className="hum_icon">
                        <img src={hum} alt="hum_icon" />
                    </div>
                    <div className="hum_descr">Hum</div>
                    <div className="hum_percent">54 %</div>
                </div>
                <div className="hum_wrap"></div>
            </div>
        </>
    )
}

export default Info;