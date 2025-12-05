import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
   {
    path: 'kaalal',
    loadChildren: () => import('./kaalal/kaalal-routing.module').then( m => m.KaalalPageRoutingModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    // canLoad:[AuthguardService]

  },
  {
    path: 'kaalal',
    loadChildren: () => import('./kaalal/kaalal-routing.module').then( m => m.KaalalPageRoutingModule)
  },
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
