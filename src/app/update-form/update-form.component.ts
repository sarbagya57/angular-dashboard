import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent implements OnInit {
  employeeDetails: Employee;

  constructor(private route: ActivatedRoute, private _router: Router) {
    this.employeeDetails = new Employee();
    this.route.params.subscribe((res) => {
      this.employeeDetails.employeeID = res['id'];
    });
  }

  ngOnInit(): void {
    const oldList = localStorage.getItem('employeeList');
    if (oldList !== null) {
      const empList = JSON.parse(oldList);
      const currentEmp = empList.find(
        (e: any) => e.employeeID == this.employeeDetails.employeeID
      );

      if (currentEmp !== undefined) {
        this.employeeDetails.employeeName = currentEmp.employeeName;
        this.employeeDetails.country = currentEmp.country;
        this.employeeDetails.type = currentEmp.type;
        this.employeeDetails.paidDays = currentEmp.paidDays;
        this.employeeDetails.timeOff = currentEmp.timeOff;
        this.employeeDetails.netPay = currentEmp.netPay;
      }
    }
  }

  updateData() {
    const oldList = localStorage.getItem('employeeList');
    if (oldList !== null) {
      const empList = JSON.parse(oldList);
      console.log(empList);

      empList.splice(
        empList.findIndex(
          (a: any) => a.employeeID == this.employeeDetails.employeeID
        ),
        1
      );
      empList.push(this.employeeDetails);
      localStorage.setItem('employeeList', JSON.stringify(empList));
      this._router.navigate(['home']);
      alert('Details updated successfully');
    }
  }
}
