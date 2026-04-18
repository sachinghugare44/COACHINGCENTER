import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, ReactiveFormsModule]
})
export class StudentFormComponent implements OnInit {
  @Input() student: any = null; // For edit mode
  studentForm: FormGroup;

  constructor(private fb: FormBuilder,private apiService: ApiService) {
    this.studentForm = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      mobile_no: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: [''],
      date_addmission: [''],
      birth_date: [''],
      parent_name: [''],
      parent_mobile: ['', [Validators.pattern('^[0-9]{10}$')]],
      gender: [''],
      stud_batch: [''],
      section_std: [''],
      status: ['Active', Validators.required]
    });
  }

  ngOnInit() {
    if (this.student) {
      this.studentForm.patchValue(this.student);
    }
  }

  submit() {
    if (this.studentForm.valid) {
      // Emit or call API here
      let requestBody ={
        first_name: this.studentForm.value.first_name,
        middle_name: this.studentForm.value.middle_name,
        last_name: this.studentForm.value.last_name,
        mobile_no: this.studentForm.value.mobile_no,
        address: this.studentForm.value.address,
        date_addmission: this.studentForm.value.date_addmission,
        birth_date: this.studentForm.value.birth_date,
        parent_name: this.studentForm.value.parent_name,
        parent_mobile: this.studentForm.value.parent_mobile,
        gender: this.studentForm.value.gender,
        stud_batch: this.studentForm.value.stud_batch,
        section_std: this.studentForm.value.section_std,
        status: this.studentForm.value.status,
        stud_id:"5757575"
      }
      console.log(requestBody);
      this.apiService.createStudent(requestBody).subscribe(
        response => {
          console.log('Student added successfully', response);
          // Optionally navigate back or reset form
        },
        error => {
          console.error('Error adding student', error);
        }
      );    
    }
  }
}
