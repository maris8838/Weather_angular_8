import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather';
let apiKey: String = '2042c1f9789858a25840e7fde27d88f5' ;



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey);
  }
  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/w/' + icon + ".png"
  }

}
