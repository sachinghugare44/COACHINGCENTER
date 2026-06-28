
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.page.html',
  styleUrls: ['./student-details.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, FormsModule, CommonModule]
})
export class StudentDetailsPage implements OnInit {
  menuExpanded = false;
  searchTerm = '';
  filter = {};
  students: any[] = [];
  pagedStudents: any[] = [];
  currentPage = 1;
  pageSize = 20;
  totalPages = 1;
  constructor(private route: Router, private apiService: ApiService) {}
  ngOnInit(){
     // Check if user is logged in
    const mobile = localStorage.getItem('mobile');
    const password = localStorage.getItem('password');
    if (!mobile || !password) {
      this.route.navigate(['/auth']);
    }
    // Demo data, replace with API call
    // this.students = Array.from({length: 45}, (_, i) => ({
    //   stud_id: 'STU' + (i+1).toString().padStart(3, '0'),
    //   first_name: 'First' + (i+1),
    //   middle_name: 'M',
    //   last_name: 'Last' + (i+1),
    //   mobile_no: '98765432' + (i%10),
    //   address: 'Address ' + (i+1),
    //   date_addmission: new Date(2023, 0, (i%28)+1),
    //   birth_date: new Date(2005, (i%12), (i%28)+1),
    //   parent_name: 'Parent' + (i+1),
    //   parent_mobile: '91234567' + (i%10),
    //   gender: i%2===0 ? 'Male' : 'Female',
    //   stud_batch: 'Batch ' + ((i%3)+1),
    //   section_std: 'Sec ' + ((i%4)+1),
    //   status: i%2===0 ? 'Active' : 'Inactive'
    // }));
    this.updatePagedStudents();
    this.getAllStudents();
  }
  getAllStudents() {
    this.apiService.getAllStudents().subscribe({
      next: (response: any) => {
        this.students = response.data;
        console.log(this.students);
        this.updatePagedStudents();
      },
      error: (error: any) => {
        console.error('Error fetching students:', error);
      }
  });
  }


  isMobile(): boolean {
    return window.innerWidth <= 600;
  }

  openFilter() {
    // Open filter modal or logic
    alert('Filter dialog (demo)');
  }

  clearFilter() {
    this.filter = {};
    this.searchTerm = '';
    this.updatePagedStudents();
  }

    updatePagedStudents() {
    let filtered = this.students;
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(s =>
        s.first_name.toLowerCase().includes(term) ||
        s.last_name.toLowerCase().includes(term) ||
        s.stud_id.toLowerCase().includes(term)
      );
    }
    this.totalPages = Math.ceil(filtered.length / this.pageSize) || 1;
    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
    const start = (this.currentPage-1)*this.pageSize;
    this.pagedStudents = filtered.slice(start, start+this.pageSize);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedStudents();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedStudents();
    }
  }
   logout() {
    localStorage.removeItem('mobile');
    localStorage.removeItem('password');
    this.route.navigate(['/auth']);
  }
  // Watch searchTerm for changes (ngModelChange in template is also possible)
  // Optionally, use RxJS for debounced search in real app

  
  navigateToStudentDetails() {
    this.route.navigate(['/student-details']);
  }

  navigateToAttendance() {
    this.route.navigate(['/attendance']);
  }

  navigateToAddStudent() {
    this.route.navigate(['/student-details/student-form']);
  }

  navigateToResults() {
    this.route.navigate(['/results']);
  }

  navigateToCustomerEnquiries() {
    this.route.navigate(['/student-dashboard/customer-enquiry']);
  }
  navigateToHome() {
    this.route.navigate(['/home']);
  }
  navigateToDashboard() {
    this.route.navigate(['/student-dashboard']);  
  }
}