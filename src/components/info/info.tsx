import './info.scss';
import wind from '../../assets/Wind.png';
import hum from '../../assets/Hum.png'

const Info = () => {
    return(
        <>
        <div className="weather_icon"></div>
        <div className="main_info_wrap">
            <div className="date">Test, 25 Test</div>
            <div className="temperature">35</div>
            <div className="weather">Test</div>
            <div className="wind_wrap">
                <div className="wind_icon">
                    <img src={wind} alt="wind_icon" />
                </div>
                <div className="wind_descr"></div>
                <div className="wind_speed"></div>
            </div>
            <div className="hum_wrap">
                <div className="hum_icon">
                    <img src={hum} alt="hum_icon" />
                </div>
                <div className="hum_descr"></div>
                <div className="hum_speed"></div>
            </div>
            <div className="hum_wrap"></div>
        </div>
    </>
    )
}

export default Info;