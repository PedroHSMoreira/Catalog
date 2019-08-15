import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  constructor() { }

  products = [{
    title: 'Modelo',
    description: 'Acabamento trilho banco e alavanca regulagem banco',
    img: "http://images.tcdn.com.br/img/img_prod/232415/11765_1_20151014174532.jpg"
  }, {
    title: 'Modelo',
    description: 'Acabamento trilho banco e alavanca regulagem banco',
    img: "http://images.tcdn.com.br/img/img_prod/232415/11765_1_20151014174532.jpg"
  },
  {
    title: 'Modelo',
    description: 'Acabamento trilho banco e alavanca regulagem bacno',
    img: "http://images.tcdn.com.br/img/img_prod/232415/11765_1_20151014174532.jpg"
  },
  {
    title: 'Modelo',
    description: 'Acabamento trilho banco e alavanca regulagem bacno',
    img: "http://images.tcdn.com.br/img/img_prod/232415/11765_1_20151014174532.jpg"

  },
  {
    title: 'Modelo',
    description: 'Acabamento trilho banco e alavanca regulagem bacno',
    img: "http://images.tcdn.com.br/img/img_prod/232415/11765_1_20151014174532.jpg"

  },
  {
    title: 'Modelo',
    description: 'Acabamento trilho banco e alavanca regulagem bacno',
    img: "http://images.tcdn.com.br/img/img_prod/232415/11765_1_20151014174532.jpg"

  }]

  ngOnInit() { }

}
