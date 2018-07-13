
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FarmersMarketModule , FARM_DETAILS_ROUTSE } from './farms/farms.market';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FarmersMarketModule,
    RouterModule.forRoot([
     { path: 'farmDetails', children: FARM_DETAILS_ROUTSE }    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
