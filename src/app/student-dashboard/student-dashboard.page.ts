
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

 

interface Student {
  rollNo: number;
  name: string;
  attendance: { [day: number]: 'P' | 'A' | '' };
}

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.page.html',
  styleUrls: ['./student-dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class StudentDashboardPage implements OnInit {
  constructor(private route: Router) {}
  ngOnInit() {
    // Check if user is logged in
    const mobile = localStorage.getItem('mobile');
    const password = localStorage.getItem('password');
    if (!mobile || !password) {
      this.route.navigate(['/auth']);
    }
  }

  menuExpanded = false;

  // For bar chart demo
  ngAfterViewInit() {
    // Chart.js is used for the bar graph. You must install it: npm install chart.js
    // @ts-ignore
    import('chart.js/auto').then((Chart) => {
      const ctx = document.getElementById('genderBarChart') as HTMLCanvasElement;
      if (ctx) {
        new Chart.default(ctx, {
          type: 'bar',
          data: {
            labels: ['2022', '2023', '2024', '2025'],
            datasets: [
              {
                label: 'Boys',
                data: [40, 45, 50, 55],
                backgroundColor: 'rgba(54, 162, 235, 0.7)'
              },
              {
                label: 'Girls',
                data: [35, 38, 42, 48],
                backgroundColor: 'rgba(255, 99, 132, 0.7)'
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { position: 'top' },
              title: { display: false }
            }
          }
        });
      }
    });
  }
   isMobile(): boolean {
    return window.innerWidth <= 600;
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

}
