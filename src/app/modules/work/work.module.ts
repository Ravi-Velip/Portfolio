import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './work-routing.module';
import { WorkShowComponent } from './work-show/work-show.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WorkShowComponent,
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    FormsModule
  ],
  exports: [
    WorkShowComponent,
  ]
})
export class WorkModule { }
