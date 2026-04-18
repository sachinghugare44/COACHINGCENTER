import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class AuthPage {
  isLogin = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  loginError: string = '';
  registerError: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private apiService: ApiService, private route: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.loginError = '';
    this.registerError = '';
    this.successMessage = '';
  }

  onLogin() {
    this.loginError = '';
    this.successMessage = '';
    if (this.loginForm.valid) {
      let requestBody = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };
      this.apiService.validateUser(requestBody).subscribe(
        response => {
          this.successMessage = 'Login successful!';
          setTimeout(() => {
            this.successMessage = '';
            this.route.navigate(['/student-dashboard']);
          }, 1200);
        },
        error => {
          this.loginError = error?.error?.message || 'Invalid credentials. Please try again.';
        }
      );
    }
  }

  onRegister() {
    this.registerError = '';
    this.successMessage = '';
    if (this.registerForm.valid) {
      let requestBody = {
        email: this.registerForm.value.email,
        name: this.registerForm.value.name,
        password: this.registerForm.value.password,
        mobile: this.registerForm.value.mobile
      };
      this.apiService.createUser(requestBody).subscribe(
        response => {
          this.successMessage = 'Registration successful! You can now login.';
          setTimeout(() => {
            this.successMessage = '';
            this.toggleMode();
          }, 1500);
        },
        error => {
          if (error?.error?.message && error.error.message.toLowerCase().includes('already')) {
            this.registerError = 'User already exists with these details.';
          } else {
            this.registerError = 'Registration failed. Please try again.';
          }
        }
      );
    }
  }
}
