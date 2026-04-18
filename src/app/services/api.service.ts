import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://leelavati-backend.onrender.com';

  constructor(private http: HttpClient) {}

  createUser(data: any) {
    return this.http.post(`${this.baseUrl}/user`, data);
  }

  getUsers() {
  return this.http.get(`${this.baseUrl}/user`);
  }

  validateUser(credentials: any) {
    return this.http.post(`${this.baseUrl}/user/login`, credentials); 
  }

  createStudent(data: any) {
    return this.http.post(`${this.baseUrl}/student`, data);
  }

  getAllStudents() {
    return this.http.get(`${this.baseUrl}/student-details`);
  }

  createCustomerEnquiry(data: any) {
    return this.http.post(`${this.baseUrl}/customer-enquiry`, data);
  }
}