import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import { UsersService } from '../../services/users.service';
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'vf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public keyword = '';
  constructor(private usersService: UsersService, private imagesService: ImagesService) { }

  ngOnInit() {
  }

  public onSubmit() {
    console.log('onSubmit');
    this.imagesService.getKeyword(this.keyword).subscribe( res => {
      console.log('users', res);
      this.imagesService.updateImages(res);
    });
  }

}
