import {Component, Input} from '@angular/core';
import {List} from "../../services/interfaces/hourly-weather/list.interface";
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css']
})
export class HourlyWeatherComponent {
  // @ts-ignore
  @Input() weatherInfo: List;

  constructor(private readonly weatherService: WeatherService) {
  }
}
