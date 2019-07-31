import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss']
})
export class DetailProductsComponent implements OnInit {

  constructor() { }
  product = {
    title: 'Gol',
    description: 'Acabamento trilho banco e alavanca regulagem banco', 
    ex: 'externo',
    in: 'interno',
    codeEx: ['1231', '1313', '3242'],
    codeIn: ['5221', '2342', '4242']
  }
  ngOnInit() {
  }

}
