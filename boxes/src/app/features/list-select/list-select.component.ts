import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  @Input() public limit = 0;
  @Output() public onSelectEmit: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public getIsSelected(prop) {
    return this.selected.includes(prop);
  }

  public selectToggle(prop) {
    const passedLimit = this.limit && this.selected.length >= this.limit;
    this.selected.includes(prop) ? this.selected.splice(this.selected.indexOf(prop), 1) :
      (passedLimit ? void(null) : this.selected.push(prop));
    this.emitChange();
  }
  private emitChange() {
    this.onSelectEmit.emit(this.selected);
  }
}
