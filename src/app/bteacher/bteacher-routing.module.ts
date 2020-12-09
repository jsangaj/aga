import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BteacherPage } from './bteacher.page';

const routes: Routes = [
  {
    path: '',
    component: BteacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BteacherPageRoutingModule {}
