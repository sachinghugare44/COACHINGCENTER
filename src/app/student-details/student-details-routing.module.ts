import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListPage } from './student-list.page';
import { StudentDetailsPage } from './student-details.page';
import { StudentFormComponent } from './student-form.component';

const routes: Routes = [
  {
    path: '',
    component: StudentDetailsPage
  },

   {
    path: 'student-form',
    component: StudentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDetailsRoutingModule {}
