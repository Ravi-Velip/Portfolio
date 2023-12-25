import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ShortComponent } from './short/short.component';

const routes: Routes = [

  {
    path: '',
    component: ShortComponent
  },
  {
    path: 'aboutMe/details',
    component: DetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutMeRoutingModule { }
