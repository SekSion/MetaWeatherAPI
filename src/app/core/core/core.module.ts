import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { RoundPipe } from './pipes/custom.pipes';



@NgModule({
  declarations: [RoundPipe],
  imports: [
    CommonModule,
    ServicesModule,
    HttpClientModule
  ],exports: [RoundPipe]
  
})
export class CoreModule { }
