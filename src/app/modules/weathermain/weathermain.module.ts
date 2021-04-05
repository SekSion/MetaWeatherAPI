import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core/core.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { WeatherMainRoutingModule } from './weathermain-routing.module';
import { WeatherMainComponent as MetherMainComponent } from './weathermain.component';




@NgModule({
  declarations: [MetherMainComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    WeatherMainRoutingModule,

  ]
})
export class WeatherMainModule { }
