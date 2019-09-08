import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss']
})
export class FilterSearchComponent implements OnInit {

  public formPrice: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.formPrice = this.fb.group({
      max: new FormControl(null, Validators.compose([

      ])),
      min: new FormControl(null, Validators.compose([

      ])),
      stock: new FormControl(null, Validators.compose([

      ]))
    });
  }

}
