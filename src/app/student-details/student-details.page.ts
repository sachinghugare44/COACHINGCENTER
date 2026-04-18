import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.page.html',
  styleUrls: ['./student-details.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class StudentDetailsPage implements OnInit {
    constructor(private router: Router,private apiService: ApiService   ) {}
    ngOnInit(): void {
        
    }
  // Fetch student details by ID from API in real use

student:any;
  goBack() {
    this.router.navigate(['/student-details/student-form']);
  }

  getAllStudents() {
this.apiService.getAllStudents().subscribe((res) => {
  this.student = res;
  console.log(this.student)}
);
  }
}