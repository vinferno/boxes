import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'vf-list-select',
  templateUrl: './list-select.component.html',
  styleUrls: ['./list-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListSelectComponent implements OnInit {

  public selected = [];
  @Input() public users = [
    { username: 'test'},
    { username: 'test 2'}
    ];
  constructor() { }

  ngOnInit() {
  }

  public getIsSelected(prop) {
    return this.selected.includes(prop);
  }

  public selectToggle(prop) {

    this.selected.includes(prop) ? this.selected.splice(this.selected.indexOf(prop), 1) : this.selected.push(prop);
  }

}
