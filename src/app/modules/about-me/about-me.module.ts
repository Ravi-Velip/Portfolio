import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { DetailsComponent } from './details/details.component';
import { ShortComponent } from './short/short.component';


@NgModule({
  declarations: [
    DetailsComponent,
    ShortComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    MatIconModule
  ],
  exports: [
    ShortComponent,
    DetailsComponent
  ]
})
export class AboutMeModule { }
