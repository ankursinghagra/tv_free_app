import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class BaseService {

	private _api = 'https://www.sapricami.com/api/tv/';

  	constructor(
  		private http: HttpClient
  	) { }

  	get_country_list(){
  		return [
  		{"code":"in","name":"India"},
  		{"code":"ca","name":"Canada"},
  		{"code":"int","name":"International"},
  		{"code":"uk","name":"United Kingdom"},
  		{"code":"us","name":"United States"},
  		{"code":"jp","name":"Japan"},
  		{"code":"cn","name":"China"},
  		{"code":"ru","name":"Russia"},
  		{"code":"sg","name":"Singapore"},
  		{"code":"sy","name":"Syria"},
  		{"code":"lk","name":"Sri Lanka"},
  		{"code":"ch","name":"Switzerland"},
  		{"code":"pk","name":"Pakistan"}
  		];
  	}

  	get_tv_list(country_code){
  		return this.http.get<any>(this._api + country_code +'.json');
  	}

    set_video_to_play(video_array){
      localStorage.setItem('video', JSON.stringify(video_array));
      return ;
    }
    get_video_to_play(){
       return JSON.parse(localStorage.getItem('video'));
    }
    set_country(country_array){
      localStorage.setItem('country', JSON.stringify(country_array));
      return ;
    }
    get_country(){
       return JSON.parse(localStorage.getItem('country'));
    }

}
