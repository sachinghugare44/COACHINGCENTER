import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

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
export class StudentDashboardPage {
  daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1); // 30 days
  students: Student[] = [
    { rollNo: 1, name: 'Amit Kumar', attendance: {} },
    { rollNo: 2, name: 'Priya Singh', attendance: {} },
    { rollNo: 3, name: 'Rahul Sharma', attendance: {} },
    { rollNo: 4, name: 'Sneha Patel', attendance: {} },
  ];

  selectedStudent: Student | null = null;
  selectedDay: number | null = null;
  showDialog = false;

  openAttendanceDialog(student: Student, day: number) {
    this.selectedStudent = student;
    this.selectedDay = day;
    this.showDialog = true;
  }

  markAttendance(status: 'P' | 'A') {
    if (this.selectedStudent && this.selectedDay) {
      this.selectedStudent.attendance[this.selectedDay] = status;
    }
    this.closeDialog();
  }

  closeDialog() {
    this.showDialog = false;
    this.selectedStudent = null;
    this.selectedDay = null;
  }

  getAttendanceSummary(student: Student) {
    const present = Object.values(student.attendance).filter(a => a === 'P').length;
    const absent = Object.values(student.attendance).filter(a => a === 'A').length;
    return { present, absent };
  }
}
