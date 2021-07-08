import {Component, Input} from '@angular/core';
import { AllWeatherInfo } from 'src/app/services/interfaces/all-weather-info.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-cur-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  // @ts-ignore
  @Input() info: AllWeatherInfo;

  constructor(private readonly weatherService: WeatherService) {
  }
}
