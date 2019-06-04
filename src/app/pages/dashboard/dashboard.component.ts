import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  template: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor(private user: UserService) { }

  ngOnInit() {
  
  }


  
}
