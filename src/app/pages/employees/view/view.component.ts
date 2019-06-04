import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  selectedID: number;
  employee: employee; 

  constructor(
    private activeRouter: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) { }

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
    this.employeeService.viewEmployee(v);
    this.router.navigate(["/employee"]);
  }
  }


