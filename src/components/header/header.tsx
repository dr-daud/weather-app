// import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useEffect } from 'react';
import { fetchLocation } from '../../state/location/locationSlice';
import {getData} from '../../state/weather/weatherSlice'

import './header.scss';
import location from '../../assets/Location.png';
import downArr from '../../assets/DownArr.png';
import bell from '../../assets/Bell.png';
import point from '../../assets/Point.png'

const Header = () => {
    const dispatch: AppDispatch = useDispatch();
    const { latitude, longitude, loading, error } = useSelector(
        (state: RootState) => state.location
    );

    useEffect(() => {
        if (latitude && longitude) {
            getData()
        }
    }, [latitude, longitude]);

    useEffect(() => {
        dispatch(fetchLocation());
    }, [dispatch]);

    const getData = async () => {
        try {
            const res = await axios({
                url: `${API_URL}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`,
                method: 'GET'
            });
            console.log(res)
             return res
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data.errText, 'error');
            } else if (error instanceof Error) {
                console.log(error.message)
            }
        }
    };


    return (
        <div className="header_wrap">
            <div className="location">
                <div><img src={location} alt="location_icon" /></div>
                <div className="city">Grozny</div>
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