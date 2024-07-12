import { Component, OnInit } from '@angular/core';
import { LeaveApplicationComponent } from '../LeaveApplication/leaveapplication.component';
import { LeaveApplication, LeaveApplicationService } from './leave-approval.service';

@Component({
  selector: 'app-leave-approval',
  templateUrl: './leave-approval.component.html',
  styleUrls: ['./leave-approval.component.scss']
})
export class LeaveApprovalComponent implements OnInit {
  isNodeLoading: boolean = true;
  searchText: string = '';
  leaveApplications: LeaveApplication[] = [];

  constructor(private leaveApplicationService: LeaveApplicationService) {}

  ngOnInit(): void {
    this.leaveApplicationService.getLeaveApplications().subscribe(
      data => {
        this.leaveApplications = data;
        this.isNodeLoading = false;
      },
      error => {
        console.error('Error fetching leave applications', error);
        this.isNodeLoading = false;
      }
    );
  }

  // Method to handle search functionality
  search(): void {
    // Implement search logic here
    console.log('Search text:', this.searchText);
  }
}
