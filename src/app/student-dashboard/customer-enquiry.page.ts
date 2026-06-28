import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-customer-enquiry',
  templateUrl: './customer-enquiry.page.html',
  styleUrls: ['./customer-enquiry.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class CustomerEnquiryPage implements OnInit {
  menuExpanded = false;
  constructor(private route: Router, private api: ApiService) {}

  ionviewWillEnter() {
    // Check if user is logged in
    const mobile = localStorage.getItem('mobile');
    const password = localStorage.getItem('password');
    if (!mobile || !password) {
      this.route.navigate(['/auth']);
    }   
}
  ngOnInit() {
    // Check if user is logged in
    const mobile = localStorage.getItem('mobile');
    const password = localStorage.getItem('password');
    if (!mobile || !password) {
      this.route.navigate(['/auth']);
    }
    this.getAllEnquiries();
  }
  isMobile(): boolean {
    return window.innerWidth <= 600;
  }
  // Demo data for customer enquiries
  enquiries:any;


  getAllEnquiries() {
     this.api.getAllCustomerEnquiries().subscribe({
    next: (response: any) => {
      this.enquiries = response.data;
      console.log(this.enquiries);
    },
    error: (error) => {
      console.error(error);
    }
  });
  }
  logout() {
    localStorage.removeItem('mobile');
    localStorage.removeItem('password');
    this.route.navigate(['/auth']);
  }

  
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
