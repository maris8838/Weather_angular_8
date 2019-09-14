import { Component, OnInit } from '@angular/core';
import { Weather } from '../app.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  weather: Weather = { 
    city: "", 
    conditions: "", 
    temperature: 0,
    humidity: 0, 
    icon: "" 
  }
  update(weather: Weather){
    this.weather = weather;
  }
  constructor() { }

  ngOnInit() {
  }

}
