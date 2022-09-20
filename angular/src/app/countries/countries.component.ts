import { Component, OnInit } from '@angular/core';
import { BaseService } from '../_services/base/base.service';

declare var window: any;

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

	countries = []

  constructor(
  	public _baseService:BaseService
  ) { }

  ngOnInit() {
  	this.countries = this._baseService.get_country_list()

    if (window['cordova']) {
      window.plugins.insomnia.allowSleepAgain();
    }
  }

}
