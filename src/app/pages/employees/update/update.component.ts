import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { employee } from 'src/app/model/employee';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  selectedID: number;
  employee: employee;
  constructor( 
    private activeRouter: ActivatedRoute, 
    private employeeService: EmployeeService, 
    private router: Router) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(data => {
      this.selectedID = data.id;
    });
    this.getEmployeeById();
  }
  getEmployeeById(){
    this.employee = this.employeeService.getEmployeeById(this.selectedID);
  }
  onSubmit(v)
  {
    this.employeeService.updateEmployee(v);
    this.router.navigate(["/employee"]);
  }

}
