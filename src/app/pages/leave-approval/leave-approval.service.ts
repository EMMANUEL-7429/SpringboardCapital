import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface for leave application
export interface LeaveApplication {
  leaveType: string;
  applicationDate: string;
  startDate: string;
  days: number;
  returnDate: string;
  reliever: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeaveApplicationService {
  private apiUrl: string = 'https://api.example.com/leave-applications'; 

  constructor(private http: HttpClient) {}

  // Method to fetch leave applications from API
  getLeaveApplications(): Observable<LeaveApplication[]> {
    return this.http.get<LeaveApplication[]>(this.apiUrl);
  }
}
