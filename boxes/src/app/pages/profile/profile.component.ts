import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'vf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public id = null;
  public user = null;
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (param ) => {
       this.id = param.get('id');
       this.usersService.getById({ _id: this.id}).subscribe( res => {
         this.user = res;
       });
    });
  }



}
