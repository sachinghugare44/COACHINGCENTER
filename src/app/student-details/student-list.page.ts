import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class StudentListPage {
  students = [
    // Dummy data for now
    { id: 1, first_name: 'Amit', last_name: 'Kumar', stud_batch: 'A', photo: 'assets/icon/person-circle-outline.svg' },
    { id: 2, first_name: 'Priya', last_name: 'Singh', stud_batch: 'B', photo: 'assets/icon/person-circle-outline.svg' }
  ];
}
