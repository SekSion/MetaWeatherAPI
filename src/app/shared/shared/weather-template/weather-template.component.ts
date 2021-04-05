import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ILocationSearchFinalResponse } from 'src/app/core/core/models/search/search.model';

@Component({
  selector: 'app-weather-template',
  templateUrl: './weather-template.component.html',
  styleUrls: ['./weather-template.component.scss']
})
export class WeatherTemplateComponent implements OnInit {
  @Input() weather: ILocationSearchFinalResponse = <ILocationSearchFinalResponse>{};


  constructor() { }

  ngOnInit(): void {
    console.log(this.weather);
  }

}
