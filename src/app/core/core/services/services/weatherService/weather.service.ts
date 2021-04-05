import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILocationSearchResponse, ISearch } from '../../../models/search/search.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

   weatherApi = environment.weatherApi;
  constructor(private http: HttpClient) {

  }

  generateParams(obj: ISearch) {
    let params = new HttpParams();
    if(obj.query !== null) {
      params = params.set('query', obj.query);
    }
    if(obj.lattlong !== null) {
      params =  params.set('lattlong', obj.lattlong);
    }
    return params;
  }

  searchLocation(obj: ISearch): Observable<ILocationSearchResponse[]> {
    return this.http.get<ILocationSearchResponse[]>(this.weatherApi + 'location/search/', { params: this.generateParams(obj) });
  }

  getWeather(woeid:number):Observable<any> {
    return this.http.get<any>(this.weatherApi + 'location/'+woeid);

  }



}
