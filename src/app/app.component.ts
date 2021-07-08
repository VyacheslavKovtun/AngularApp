import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AllWeatherInfo } from './services/interfaces/all-weather-info.interface';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  readonly API_KEY: string = `c342b531a7f315fe59672bfc812ef961`;
  title = 'AngularApp';
  // @ts-ignore
  info: AllWeatherInfo;
  curWeather: boolean = false;
  weatherByHours: boolean = false;
  btnCurWeatherTitle: string = 'Show current current-weather';
  btnWeatherByHoursTitle: string = 'Show current-weather by hours';

  constructor(private readonly weatherService: WeatherService) {

  }

  ngOnInit(): void {
    this.weatherService.getCurrentWeatherByCity('Dnipro', this.API_KEY)
      .subscribe(info => {
        this.info = info;
      });
  }

  onBtnCurWeatherClick() {
    if(this.curWeather) {
      this.btnCurWeatherTitle = 'Show current current-weather';
      this.curWeather = false;
    }
    else {
      this.btnCurWeatherTitle = 'Hide current current-weather';
      this.curWeather = true;
    }
  }

  onBtnWeatherByHoursClick() {
    if(this.weatherByHours) {
      this.btnWeatherByHoursTitle = 'Show current-weather by hours';
      this.weatherByHours = false;
    }
    else {
      this.btnWeatherByHoursTitle = 'Hide current-weather by hours';
      this.weatherByHours = true;
    }
  }
}
