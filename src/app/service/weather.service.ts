import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  URI: string = '';
  apiKey: string = 'a20533974552cd247ba71e4e06c33774';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    this.URI = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=metric&q=`;
    return this.http.get(`${this.URI}${city}`);
  }
}
