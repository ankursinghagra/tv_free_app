import { Component, OnInit, OnDestroy,
  AfterViewInit,
  ElementRef,
  Input } from '@angular/core';
  import { BaseService } from '../_services/base/base.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

declare const videojs: any;
declare var window:any, $:any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  // reference to the element itself, we use this to access events and methods
  private _elementRef: ElementRef

  seekbarTracker: any = {
    duration: 0,
    time: 0,
    seekPercent: 0,
    hasDVR: false,
  };

  video_array: {
    'm3u8':any,
    'logo':any,
    'name':any,
  };
  country: {
    'code':any,
    'name':any,
  };

  seekTime: number;
  // // video asset url
  // @Input() url: any;

  // declare player var
  private player: any;

  // constructor initializes our declared vars
  constructor(
    elementRef: ElementRef,
    public _baseService:BaseService,
    public route: ActivatedRoute,
    public _router: Router,
    public _location:Location,) {
    // this.url = false;
    this.player = false;
  }

  ngOnInit() { 
    this.video_array = this._baseService.get_video_to_play();
    this.country = this._baseService.get_country();
  }

  // use ngAfterViewInit to make sure we initialize the videojs element
  // after the component template itself has been rendered



  ngAfterViewInit() {

    this.video_array = this._baseService.get_video_to_play();
    console.log(this.video_array);
    /*if (!Array.isArray(video_arr)) {
      this._router.navigate(['error_page']);
    }*/
    if (window['cordova']) {
      window.plugins.insomnia.keepAwake();
    }
    const self = this;
    var options = {
      html5:{
        hls:{
          enableLowInitialPlaylist:true
        }
      },
      flash:{
        hls:{
          enableLowInitialPlaylist:true
        }
      },
      inactivityTimeout:0,
      controls:true,
      autoplay:true,
      preload:"auto",
    };
    self.player = videojs(document.getElementById('sxmvideo'),options);
    var qLevels = [];

    self.player.qualityLevels().on('addqualitylevel', function(event) {
        var quality = event.qualityLevel;
        console.log(quality);
        
        if (quality.height != undefined && $.inArray(quality.height, qLevels) === -1)
        {
          quality.enabled = true;
          
          qLevels.push(quality.height);
          
          if (!$('.quality_ul').length)
          {
            var h = '<div class="quality_setting vjs-menu-button vjs-menu-button-popup vjs-control vjs-button">' +
                '<button class="vjs-menu-button vjs-menu-button-popup vjs-button" type="button" aria-live="polite" aria-disabled="false" title="Quality" aria-haspopup="true" aria-expanded="false">' +
                '<span aria-hidden="true" class="vjs-icon-cog"></span>' +
                '<span class="vjs-control-text">Quality</span></button>' +
                '<div class="vjs-menu"><ul class="quality_ul vjs-menu-content" role="menu"></ul></div></div>';
            
            $(".vjs-fullscreen-control").before(h);
          } else {
            $('.quality_ul').empty();
          }
          
          qLevels.sort();
          qLevels.reverse();
          
          var j = 0;
          
          $.each(qLevels, function(i, val) {
            $(".quality_ul").append('<li class="vjs-menu-item" tabindex="' + i + '" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false" bitrate="' + val +
                        '"><span class="vjs-menu-item-text">' + val + 'p</span></li>');
            
            j = i;
          });
          
          $(".quality_ul").append('<li class="vjs-menu-item vjs-selected" tabindex="' + (j + 1) + '" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="true" bitrate="auto">' +
                      '<span class="vjs-menu-item-text">Auto</span></li>');
        }
      });
  
      $("body").on("click", ".quality_ul li", function() {
        $(".quality_ul li").removeClass("vjs-selected");
        $(".quality_ul li").prop("aria-checked", "false");
        
        $(this).addClass("vjs-selected");
        $(this).prop("aria-checked", "true");
        
        var val = $(this).attr("bitrate");
        console.log(val);
        var qualityLevels = self.player.qualityLevels();
        
        for (var i = 0; i < qualityLevels.length; i++)
        {
          qualityLevels[i].enabled = (val == "auto" || (val != "auto" && qualityLevels[i].height == val));
        }
      });
    self.player.muted(false);
    self.player.responsive(true);
    //this.player.play();
    self.player.on('timeupdate', () => {
      let hasDVR = false;
      let duration = Math.floor(this.getDuration(this.player) * 1000);
      let time;
      let seekPercent;
      // this.player.controls(true);
      //console.log(this.player.currentTime(), this.getDuration(this.player));

      // if(duration) {
      //   this.seekbarTracker.duration = duration;

      //   // constrain time
      //   time = Math.floor(Math.max(0, Math.min(duration, this.player.currentTime() * 1000)));
      //   this.seekbarTracker.time = time; 
      //   seekPercent = time / duration;
      //   if(seekPercent !== this.seekbarTracker.seekPercent) {
      //     this.onSeekPercentChange(this.player, seekPercent, duration);
      //   }
      //   this.seekbarTracker.seekPercent = seekPercent;

      //   // duration is not Infinity, so if isLive() returns true, then player should have DVR.
      //   hasDVR = this.isLive();
      // }

      // this.seekbarTracker.hasDVR = hasDVR;
    });
  }

  getDuration(player) {
    var seekable = player.seekable();
    return seekable && seekable.length ? seekable.end(0) - seekable.start(0) : 0;
  }

  onSeekPercentChange(player, seekPercent, duration) {
    var seekable = player.seekable();

    if (seekable && seekable.length) {
      // constrain currentTime
      player.currentTime(Math.max(0, Math.min(seekable.end(0), seekable.start(0) + (seekPercent * duration))));
    }
  }

  isLive() {
    if (!isFinite(this.player.duration())) {
      return true;
    }

    var acceptableDelay = 30;
    var seekable = this.player.seekable();
    return seekable && seekable.length && seekable.end(0) - this.player.currentTime() < acceptableDelay;
  }

  ngOnDestroy() {

    // this.player.dispose();
  }

  seek(n) {
    this.player.currentTime(this.seekTime || 1266);
  }
  play(n) {

    if (this.player.paused()) {
      this.player.play();
    }
    else {
      this.player.pause();
    }
  }

  create() {

    this.player.src({
      src: ' https://oocache-live-delivery-ooyala.akamaized.net/out/u/d8npqvovi8we5/110326/N5cmNvZjE6U3nnGeGa0yVC66Gaw-NWxS/en/fda8ba2dd9554ad2b668277730469fea.m3u8'
    
    });
    this.player.play();
    // this.player.controlBar.currentTimeDisplay();  
  }

  destroy() {

  }

}
