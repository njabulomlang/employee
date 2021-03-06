import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:UserService) { }

  ngOnInit() {
  }
  loginUser(e){

    e.preventDefault();
    console.log(e);
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(username, password);

    if(username == 'admin' && password == '12345'){
      this.user.setUserLoggedIn();
      this.router.navigate(['employee']);
    }
    else {
     alert('Wrong credentials');
      location.reload();
    }
  
      
  }
}
