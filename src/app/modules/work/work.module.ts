import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkShowComponent } from './work-show/work-show.component';
import { ToDoAppComponent } from './to-do-app/to-do-app.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    WorkShowComponent,
    ToDoAppComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    FormsModule
  ],
  exports:[
    WorkShowComponent,
    ChildComponent
  ]
})
export class WorkModule { }
