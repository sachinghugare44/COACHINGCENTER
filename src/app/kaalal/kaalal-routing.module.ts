import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaalalPage } from './kaalal.page';

const routes: Routes = [
  {
    path: '',
    component: KaalalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaalalPageRoutingModule {}
