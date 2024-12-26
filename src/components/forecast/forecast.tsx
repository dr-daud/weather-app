import './forecast.scss'
import upArr from '../../assets/UpArr.png'

const Forecast = () => {
    return (
        <>
            <button className="forecast">Forecast report<img src={upArr} alt="" className="up_arr" /></button>
        </>
    )
}
export default Forecast