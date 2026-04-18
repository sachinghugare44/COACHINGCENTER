import { NgModule } from '@angular/core';
import { StudentDashboardPage } from './student-dashboard.page';
import { StudentDashboardPageRoutingModule } from './student-dashboard-routing.module';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    StudentDashboardPageRoutingModule,
    StudentDashboardPage
  ]
})
export class StudentDashboardPageModule {}
