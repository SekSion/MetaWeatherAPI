import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from 'src/app/core/core/models/search/search.model';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss']
})
export class WeatherInfoComponent implements OnInit {

  @Input() weatherInfo: IWeather[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
