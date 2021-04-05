import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherTemplateComponent } from './weather-template/weather-template.component';
import { WeatherInfoComponent } from './weather-template/weather-info/weather-info.component';
import { CoreModule } from 'src/app/core/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [WeatherTemplateComponent, WeatherInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,

 
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    WeatherTemplateComponent,
    WeatherInfoComponent,
    
  ]
})
export class SharedModule { }
