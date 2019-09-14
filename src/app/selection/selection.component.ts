import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {WeatherService} from '../weather.service';
import {Weather} from '../app.component'
@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
@Output ()onSelection: EventEmitter<Weather> = new 
EventEmitter<Weather>()
weather: Weather = new Weather()
city: String = ""
  constructor(private weatherData: WeatherService) { }  
  
  submit (){
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city = data['name']
      this.weather.conditions = data ['weather'] [0] ['main']
      this.weather.temperature = Math.round((data['main'] ['temp'] - 273015)*1.8+32)
      this.weather.humidity = (data ['main']['humidity'])
      this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])
      this.onSelection.emit(this.weather)
    })
  }
  ngOnInit() {
  }

}
