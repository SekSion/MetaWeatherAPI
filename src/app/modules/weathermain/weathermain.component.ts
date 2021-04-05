import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ILocationSearchFinalResponse, ILocationSearchResponse, ISearch } from 'src/app/core/core/models/search/search.model';
import { WeatherService } from 'src/app/core/core/services/services/weatherService/weather.service';

@Component({
  selector: 'app-weathermain',
  templateUrl: './weathermain.component.html',
  styleUrls: ['./weathermain.component.scss'],

})
export class WeatherMainComponent implements OnInit {
  weatherForm: FormGroup;
  chooseSearchForm: FormGroup;
  loading:boolean = false;
  weather:ILocationSearchFinalResponse = <ILocationSearchFinalResponse>{};
  constructor(public fb: FormBuilder,
    private weatherService: WeatherService,
    private toastr: ToastrService) {

    this.chooseSearchForm = this.fb.group({
      searchType: ['query'],
    });

    this.weatherForm = this.fb.group({
      query: [{ value: null, disabled: false }, [Validators.required]],
      lat: [{ value: null, disabled: true }],
      long: [{ value: null, disabled: true }],
    });

  }

  ngOnInit(): void {
    this.formChanges();
  }

  formChanges() {
    this.chooseSearchForm.valueChanges.subscribe(val => {
      console.log(val);

      switch (val.searchType) {
        case 'query':
          this.weatherForm.get('query')?.enable();
          this.weatherForm.get('query')?.setValidators([Validators.required]);
          this.weatherForm.get('lat')?.setValidators([]);
          this.weatherForm.get('long')?.setValidators([]);
          this.weatherForm.get('lat')?.disable();
          this.weatherForm.get('long')?.disable();
          break;
        case 'latlong':
          this.weatherForm.get('query')?.disable();
          this.weatherForm.get('query')?.setValidators([]);
          this.weatherForm.get('lat')?.setValidators([Validators.required]);
          this.weatherForm.get('long')?.setValidators([Validators.required]);
          this.weatherForm.get('lat')?.enable();
          this.weatherForm.get('long')?.enable();
          break;
      }

    });
  }

  search() {
    let obj: ISearch = {
      query: null,
      lattlong: null
    };
    switch (this.chooseSearchForm.get('searchType')?.value) {
      case 'query':
        obj.query = this.weatherForm.get('query')?.value;
        break
      case 'latlong':
        let tempArr = [this.weatherForm.get('lat')?.value, this.weatherForm.get('long')?.value]
        obj.lattlong = tempArr.join(',');
        break;
    }
    this.loading = true;
    this.weather = <ILocationSearchFinalResponse>{};
    this.weatherService.searchLocation(obj).subscribe((res: ILocationSearchResponse[]) => {
      console.log(res);
      if(res.length == 0) {
       this.toastr.info("No Locations Found");
        this.loading = false;
        this.weather = <ILocationSearchFinalResponse>{};
        return;
      }
      let closest = res[0];
      

      this.weatherService.getWeather(closest.woeid).subscribe((res:ILocationSearchFinalResponse) => {
        this.loading = false;
        console.log("FINAL", res);
        this.weather = res;
      }, err => {
        this.loading = false;
        this.toastr.error(err, "Ups Something went wrong: ON FINAL CALL");
        console.log("Ups Something went wrong: ON FINAL CALL", err);
      });
    }, err => {
      this.loading = false;
      this.toastr.error(err, "Ups Something went wrong: ON FIRST CALL");
      console.log("Ups Something went wrong: ON FIRST CALL", err);
    });

  }

}
