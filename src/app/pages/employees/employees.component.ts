import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  employeeList: Array<employee>;

  constructor(private employeeService: EmployeeService) {
    
   }
   ngOnInit(){
    this.getEmployee();
   }
   getEmployee(){
     this.employeeList = this.employeeService.getEmployee();
     console.log(this.employeeList);
   }

  
  onDelete(id) {
    this.employeeService.delete(id);
  }
 
}

