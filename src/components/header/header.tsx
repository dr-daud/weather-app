import './header.scss';
import location from '../../assets/Location.png';
import downArr from '../../assets/DownArr.png';
import bell from '../../assets/Bell.png';
import point from '../../assets/Point.png'

const Header = () => {
    return(
        <div className="header_wrap">
            <div className="location">
                <div><img src={location} alt="location_icon" /></div>
                <div className="city">Semarang</div>
                <div><img src={downArr} alt="down_arrow" /></div>
            </div>
            <div className="bell">
                <img src={bell} alt="bell_icon" />
                <img src={point} alt="" />
            </div>
        </div>
    )
}

export default Header;