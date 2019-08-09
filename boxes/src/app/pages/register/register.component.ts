import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'vf-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private usersService: UsersService, private fb: FormBuilder, private router: Router) { }
  public form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }

  public register() {
    this.usersService.register(this.form.value).subscribe( res => {
      console.log(res);
      this.router.navigateByUrl('/dash')
    });
  }

}
