import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchievementsRoutingModule } from './achievements-routing.module';
import { CertificationShowComponent } from './certification-show/certification-show.component';


@NgModule({
  declarations: [
    CertificationShowComponent
  ],
  imports: [
    CommonModule,
    AchievementsRoutingModule
  ],
  exports:[
    CertificationShowComponent
  ]
})
export class AchievementsModule { }
