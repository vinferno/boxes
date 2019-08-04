import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'vf-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  public users = [];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe( res => {
      this.users = res;
    });
  }

}
