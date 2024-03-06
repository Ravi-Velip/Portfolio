import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ContactDetailsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class SharedModule { }
