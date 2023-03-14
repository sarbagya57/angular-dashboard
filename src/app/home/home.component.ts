import { Employee } from './../models/employee.model';
import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  employees: Employee[] = [];
  totalPaidDays: Number = 0;
  totalTimeOff: Number = 0;
  totalNetPay: Number = 0;

  ngOnInit(): void {
    const records = localStorage.getItem('employeeList');
    if (records !== null) {
      this.employees = JSON.parse(records);
      this.getTotalPaidDays();
      this.getTotalTimeOff();
      this.getTotalNetPay();
    }
  }

  updateData() {
    console.log('updated');
  }

  deleteData(id: any) {
    const empList = this.employees;
    if (confirm('Are you sure you want to delete the employee?'))
      empList.splice(
        empList.findIndex((a: any) => a.employeeID == id),
        1
      );
    localStorage.setItem('employeeList', JSON.stringify(empList));
    this.ngOnInit();
  }

  getTotalPaidDays() {
    this.totalPaidDays = this.employees.reduce((acc, pay: any) => {
      return acc + pay.paidDays;
    }, 0);
  }

  getTotalTimeOff() {
    this.totalTimeOff = this.employees.reduce((acc, pay: any) => {
      return acc + pay.timeOff;
    }, 0);
  }

  getTotalNetPay() {
    this.totalNetPay = this.employees.reduce((acc, pay: any) => {
      return acc + pay.netPay;
    }, 0);
  }
}
