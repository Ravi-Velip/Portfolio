import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'aboutMe',
    loadChildren: () => import('./modules/about-me/about-me.module').then(m => m.AboutMeModule),
  },
  {
    path: 'my-work',
    loadChildren: () => import('./modules/work/work.module').then(m => m.WorkModule),
  },
  {
    path: 'certifications',
    loadChildren: () => import('./modules/achievements/achievements.module').then(m => m.AchievementsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
