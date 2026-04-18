import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { StudentListPage } from './student-list.page';
import { StudentFormComponent } from './student-form.component';
import { StudentDetailsPage } from './student-details.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    StudentDetailsRoutingModule,
    StudentListPage,
    StudentFormComponent,
    StudentDetailsPage,
    
  ]
})
export class StudentDetailsModule {}
