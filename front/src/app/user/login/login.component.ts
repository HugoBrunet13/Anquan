import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: FormControl;
  public password: FormControl;
  public loginForm: FormGroup;

  constructor(private builder: FormBuilder,
  private route: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
  }


}
