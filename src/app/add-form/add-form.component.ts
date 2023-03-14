import { Employee } from '../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  employeeDetails: Employee;

  constructor(private _router: Router) {
    this.employeeDetails = new Employee();
  }

  ngOnInit(): void {}

  getNewEmpID() {
    const oldList = localStorage.getItem('employeeList');
    if (oldList !== null) {
      const empList = JSON.parse(oldList);
      return empList.length + 1;
    } else {
      return 1;
    }
  }

  addData() {
    const latestID = this.getNewEmpID();
    this.employeeDetails.employeeID = latestID;
    const oldList = localStorage.getItem('employeeList');
    if (oldList !== null) {
      const empList = JSON.parse(oldList);
      empList.push(this.employeeDetails);
      localStorage.setItem('employeeList', JSON.stringify(empList));
      this._router.navigate(['home']);
      alert('Record added successfully');
    } else {
      const empArr = [];
      empArr.push(this.employeeDetails);
      localStorage.setItem('employeeList', JSON.stringify(empArr));
    }
  }
}
