import { Injectable } from '@angular/core';
import { employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee: Array<employee> = [
    {
      id:1,
      name: "Example",
      organization: "CodeTribe",
      email:"xyz@mail.com",
      image:
        "https://scontent.fjnb10-1.fna.fbcdn.net/v/t1.0-9/50020358_109554220128721_1632925275786313728_n.jpg?_nc_cat=108&_nc_ht=scontent.fjnb10-1.fna&oh=b3663180a8e12bd56df928314cda88f1&oe=5D68548E",
      cellno: "0123456789",
      bio:
        "looks like we don't have time"
    }
  ];
 
  getEmployee(): Array<employee> {
    return this.employee;
  }
  addEmployee(v: any): any {
    this.employee.push(v);
  }
  delete(id: any): any {
    this.employee.map((employee, index) => {
      if (employee.id === id) {
        this.employee.splice(index, 1);
      }
    });
    }
    getEmployeeById(id: number) {
      let tempEmployee: employee;
      this.employee.map(a => {
        if (a.id == id) {
          tempEmployee = a;
        }
      });
      return tempEmployee;
    }
    updateEmployee(employee: employee) {
      this.employee.map((a, index) => {
        if (a.id === employee.id) {
          a.name = employee.name;
          a.organization = employee.organization;
          a.email = employee.email;
          a.image = employee.image;
          a.cellno = employee.cellno;
          a.bio = employee.bio;
        }
      });
    }
    viewEmployee(employee: employee){
      this.employee.map((a, index) => {
        if (a.id === employee.id) {
          a.name = employee.name;
          a.organization = employee.organization;
          a.email = employee.email;
          a.image = employee.image;
          a.cellno = employee.cellno;
          a.bio = employee.bio;
        }
      });
    }
  constructor() { }
}
