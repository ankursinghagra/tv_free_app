import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, Input } from '@angular/core';
import { BaseService } from '../_services/base/base.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

declare const videojs: any;

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

	channels = [];
  url = '';
  loading = false;
  constructor(
  	public _baseService:BaseService,
  	public route: ActivatedRoute,
    public _router: Router,
    public _location:Location,
  ) {
  }

  ngOnInit() {

  	this.route.queryParams.subscribe(queryParams => {
      // do something with the query params
    });
    this.route.params.subscribe(routeParams => {
       this.loading = true;
       this._baseService.get_tv_list(routeParams.ID)
       	.subscribe(
       		res => {
             this.loading = false
       			console.log(res);
       			this.channels = res;
       		},
       		err => {
             this.loading = false;
       		}
       	);
    });
  }

  view_video(arr){
    this._baseService.set_video_to_play(arr);
    console.log(this._baseService.get_video_to_play());
    this._router.navigate(['/player/']);
  }
}
