import './forecast.scss'
import upArr from '../../assets/UpArr.png'
import axios from "axios";
import { useEffect } from 'react';

const Forecast = () => {

    const OPENAI_API_KEY = 'NTBlNTU1MjQtZTNiYS00MTlkLWJlMmEtNTVkMjA0ODJkN2Q3OjQ0YWMwZGU4LWQyMGMtNDRhNC1iNzM4LTRiM2ZhZTIyZDAwNA==';

    useEffect(() => {
        // fetchGPT()
    }, [])



    const fetchGPT = async () => {
        try {
            const response = await axios({
                method: 'POST',
                url: 'https://ngw.devices.sberbank.ru:9443/api/v2/oauth',
                data: {
                    "model": "gpt-4o-mini",
                    "messages": [{ "role": "user", "content": "Say this is a test!" }],
                    "temperature": 0.7
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                }
            })
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button className="forecast">Forecast report<img src={upArr} alt="up_arrow" className="up_arr" /></button>
        </>
    )
}
export default Forecast

// const client = axios.create({
//     headers: {
//         Authorization: `Bearer ${OPENAI_API_KEY}`
//     }
// });

// const params = {
//     prompt: "What is the capital of the United States?",
//     model: "gpt-4o-mini",
//     max_tokens: 7,
//     temperature: 0
// };

// client
//     .post("https://api.openai.com/v1/chat/completions", params)
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((error) => {
//         console.error(error);
//     });