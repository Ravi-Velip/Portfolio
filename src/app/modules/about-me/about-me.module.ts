import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { DetailsComponent } from './details/details.component';
import { ShortComponent } from './short/short.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DetailsComponent,
    ShortComponent,
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [
    ShortComponent,
    DetailsComponent
  ]
})
export class AboutMeModule { }
