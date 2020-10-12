import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() { }

  getWeather(city: string) {
    this.weatherService.getWeather(city)
      .subscribe(

        resp => this.weather = resp,
        err => {

          if (err.error.cod === '404') {
            alert('Please, insert a valid city...')
          }
          console.log(err)
        }
      );
  }

  submitLocation(city: HTMLInputElement) {
    city.value ? this.getWeather(city.value) : alert('Please insert some value...');

    city.value = '';
    city.focus();

    return false;
  }
}
