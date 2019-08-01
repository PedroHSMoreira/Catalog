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
    img: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  }, {
    title: 'Modelo',
    description: 'Acabamento trilho banco e alavanca regulagem banco',
    img: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  },
  {
    title: 'Modelo',
    description: 'Acabamento trilho banco e alavanca regulagem bacno',
    img: "https://material.angular.io/assets/img/examples/shiba2.jpg"
  },
  {
    title: 'Modelo',
    description: 'Acabamento trilho banco e alavanca regulagem bacno',
    img: "https://material.angular.io/assets/img/examples/shiba2.jpg"

  },
  {
    title: 'Modelo',
    description: 'Acabamento trilho banco e alavanca regulagem bacno',
    img: "https://material.angular.io/assets/img/examples/shiba2.jpg"

  },
  {
    title: 'Modelo',
    description: 'Acabamento trilho banco e alavanca regulagem bacno',
    img: "https://material.angular.io/assets/img/examples/shiba2.jpg"

  }]

  ngOnInit() { }

}
