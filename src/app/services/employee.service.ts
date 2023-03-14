import { Employee } from './../models/employee.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [];

  constructor() {}

  onGet() {
    return this.employees;
  }
}
