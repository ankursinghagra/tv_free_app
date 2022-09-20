import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './_services/base/base.service';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { CountriesComponent } from './countries/countries.component';
import { ChannelsComponent } from './channels/channels.component';
import { ErrorComponent } from './error/error.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
	{
		path: '', redirectTo: 'home', pathMatch: 'full'
	},
	{
		path: 'home',
		component: CountriesComponent
	},
	{
		path: 'channels/:ID',
		component: ChannelsComponent
	},
	{
		path: 'player',
		component: PlayerComponent
	},
  {
    path: 'error_page',
    component: ErrorComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: "**", redirectTo: 'error_page'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CountriesComponent,
    ChannelsComponent,
    ErrorComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
    	useHash : true,
    }),
    HttpClientModule
  ],
  providers: [
  	BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
