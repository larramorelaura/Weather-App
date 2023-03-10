import { ReactComponent as Clear } from '../assets/WeatherAppImages/images/weather-icons/Clear.svg';
import { ReactComponent as Clouds } from '../assets/WeatherAppImages/images/weather-icons/Clouds.svg';
import { ReactComponent as Rain } from '../assets/WeatherAppImages/images/weather-icons/Rain.svg';
import { ReactComponent as ModRain } from '../assets/WeatherAppImages/images/weather-icons/09d.svg';
import { ReactComponent as HeavyCloud } from '../assets/WeatherAppImages/images/weather-icons/03n.svg';
import { ReactComponent as LightClouds } from '../assets/WeatherAppImages/images/weather-icons/02d.svg';
import { ReactComponent as Snow } from '../assets/WeatherAppImages/images/weather-icons/13n.svg';
import { ReactComponent as Storm } from '../assets/WeatherAppImages/images/weather-icons/11d.svg';

export function getWeatherIcon(weather){
switch(weather.main){
    case 'Clear':
        return <Clear />;
    case 'Snow':
        return <Snow />;
    case 'Thunderstorm':
        return <Storm />;
    case 'Drizzle':
    case 'Rain':
        return weather.description === 'light rain' ? <Rain /> : <ModRain />;
    case 'Clouds':
        switch (weather.description) {
        case 'overcast clouds':
            return <HeavyCloud />;
        case 'few clouds':
        case 'scattered clouds':
            return <LightClouds />;
        default:
            return <Clouds />;
        }
    default:
        return null;
}
}
