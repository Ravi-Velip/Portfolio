import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationShowComponent } from './certification-show/certification-show.component';

const routes: Routes = [
  {
    path:'', component:CertificationShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchievementsRoutingModule { }
