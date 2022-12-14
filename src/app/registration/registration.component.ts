import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  user=new User();
  msg='';
  
  constructor(private _service : RegistrationService,private _router :Router) { }

  ngOnInit(): void {
  }

registerUser()
{
  this._service.registerUserFromRemote(this.user).subscribe(
    data=>{
    console.log("response recieved");
    this.msg="Registration Successfull";

    }
     , error=>{
      console.log("exception occured");
      this.msg=error.error;
    }
  )
}

}


