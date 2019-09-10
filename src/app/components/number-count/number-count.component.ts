import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-count',
  templateUrl: './number-count.component.html',
  styleUrls: ['./number-count.component.scss']
})
export class NumberCountComponent implements OnInit {

  @Input() init: number;
  @Output() count = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * add
   */
  public add() {
    this.init++;
    this.count.emit(this.init);
  }

  /**
   * del
   */
  public del() {
    if (this.init > 1) {
      this.init--;
      this.count.emit(this.init);
    }
  }

}
