import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SharedModule } from '../shared/shared.module';
import { AboutMeModule } from '../about-me/about-me.module';
import { WorkModule } from '../work/work.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxTypedJsModule,
    SharedModule,
    AboutMeModule,
    WorkModule,
  ]
})
export class DashboardModule { }
