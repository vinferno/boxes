import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'vf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  public onSubmit() {
    this.apiService.test();
  }

}
