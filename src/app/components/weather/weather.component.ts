import {Component, Input} from '@angular/core';
import { AllWeatherInfo } from 'src/app/services/interfaces/all-weather-info.interface';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  // @ts-ignore
  @Input() info: AllWeatherInfo;

  constructor(private readonly weatherService: WeatherService) {
  }
}
