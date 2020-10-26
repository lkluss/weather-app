import { BaseModel } from './BaseModel';

export class WeatherModel extends BaseModel {
    weather: Weather;
    clouds: Clouds;
    main: Main;
    dt: string;
    timezone: string;
}

class Clouds {
    all: string;
}

class Weather {
    description: string;
    main: string;   
    icon: string; 
}

class Main {
    feels_like:string;
    humidity: string;
    pressure: string;
    temp: string;
    temp_max: string;
    temp_min: string;
}