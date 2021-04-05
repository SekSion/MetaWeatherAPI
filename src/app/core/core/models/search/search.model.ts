export interface ISearch {
    query: string | null;
    lattlong: string | null;
}

export interface ILocationSearchResponse {
    title: string,
    woeid: number,
    location_type:string;
    latt_long: string;
    distance?: number;
}

export interface ILocationSearchFinalResponse {
    title: string,
    woeid: number,
    location_type:string;
    latt_long: string;
    consolidated_weather: Array<IWeather>;
    parent:ILocationSearchResponse;
    sources:Array<ISources>;
    sun_rise:string;
    sun_set:string;
    time:string;
    timezone:string;
    timezone_name:string;
}

export interface ISources {
    crawl_rate:number;
    slug:string;
    title:string;
    url:string;
}

export interface IWeather {
    air_pressure:number;
    applicable_date:string;
    created:string;
    humidity:number;
    id:number;
    max_temp:number;
    min_temp:number;
    predictability:number;
    the_temp:number;
    visibility:number;
    weather_state_abbr:string;
    weather_state_name:string;
    wind_direction:number;
    wind_direction_compass:string;
    wind_speed:number;
}