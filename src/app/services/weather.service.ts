import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AllWeatherInfo } from "./interfaces/current-weather/all-weather-info.interface";
import {DataNewsResponse} from "./interfaces/hourly-weather/response.interface";

@Injectable()
export class WeatherService {
    constructor(private readonly httpClient: HttpClient) {

    }

    getCurrentWeatherByCity(city: string, api: string): Observable<AllWeatherInfo> {
      return this.httpClient.get<AllWeatherInfo>([environment.API_URL, `/data/2.5/weather?q=${city}&appid=${api}`].join(''));
    }

    getWeatherByHours(city:string, api: string): Observable<DataNewsResponse> {
      return this.httpClient.get<DataNewsResponse>([environment.API_URL, `/data/2.5/forecast?q=${city}&appid=${api}`].join(''));
    }
}
