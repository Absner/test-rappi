import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/models/product.models';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {

  @Input() product: IProduct;
  @Output() selection = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  /**
   * addCard
   */
  public addCard(option: IProduct) {
    this.selection.emit(option);
  }

}
