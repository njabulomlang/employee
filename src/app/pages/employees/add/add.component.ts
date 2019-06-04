import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private employee: EmployeeService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(v)
  {
    this.employee.addEmployee(v);
    this.router.navigate(["/employee"]);


  }
}
