import React from 'react';
import { Cloud, CloudRain, Sun, CloudSun } from 'lucide-react';
import { WeatherForecast } from '../../types';

interface WeatherWidgetProps {
  weather: WeatherForecast;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ weather }) => {
  const getWeatherIcon = (iconName: string) => {
    switch (iconName) {
      case 'sun':
        return <Sun className="h-8 w-8 text-yellow-400" />;
      case 'cloud':
        return <Cloud className="h-8 w-8 text-gray-400" />;
      case 'cloud-rain':
        return <CloudRain className="h-8 w-8 text-blue-400" />;
      case 'cloud-sun':
        return <CloudSun className="h-8 w-8 text-yellow-300" />;
      default:
        return <Sun className="h-8 w-8 text-yellow-400" />;
    }
  };

  const getDayName = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-lg overflow-hidden shadow-md mb-6">
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">Weather in {weather.location}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {getWeatherIcon(weather.current.icon)}
            <div className="ml-3">
              <span className="text-3xl font-bold">{weather.current.temp}°</span>
              <p className="text-sm opacity-90">{weather.current.condition}</p>
            </div>
          </div>
          <div className="text-right text-sm">
            <p>Humidity: {weather.current.humidity}%</p>
            <p>Wind: {weather.current.windSpeed} km/h</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white/20 backdrop-blur-sm">
        <div className="grid grid-cols-5 divide-x divide-white/10">
          {weather.forecast.map((day, index) => (
            <div key={index} className="p-2 text-center">
              <p className="text-xs font-medium">{getDayName(day.date)}</p>
              <div className="my-1 flex justify-center">
                {getWeatherIcon(day.icon)}
              </div>
              <p className="text-xs">
                <span className="font-medium">{day.maxTemp}°</span>
                <span className="opacity-75 ml-1">{day.minTemp}°</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;