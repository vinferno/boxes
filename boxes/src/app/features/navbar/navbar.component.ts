import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'vf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  public onSubmit() {
    console.log('onSubmit');
    this.usersService.getUsers().subscribe( res => {
      console.log('users', res);
    });
  }

}
