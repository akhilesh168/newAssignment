import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  dummyArray:any;
  restaurent_Arr = [
    {"name":"Barbeque","image_url":"../../assets/images/image1.jpeg","description":"service is available in all parts of India","offers":"avai 50% discount"},
    {"name":"Fassos","image_url":"../../assets/images/image3.jpg","description":"service is available in all parts of India","offers":"avai 50% discount"},
    {"name":"Mr Punjab","image_url":"../../assets/images/image3.jpg","description":"service is available in all parts of India","offers":"avai 50% discount"},
    {"name":"Tadka","image_url":"../../assets/images/image4.jpg","description":"service is available in all parts of India","offers":"avai 50% discount"},
    {"name":"Dal Bati","image_url":"../../assets/images/image5.jpg","description":"service is available in all parts of India","offers":"avai 50% discount"},
    {"name":"Dominos","image_url":"../../assets/images/image6.jpg","description":"service is available in all parts of India","offers":"avai 50% discount"},
    {"name":"MR Singh","image_url":"../../assets/images/image7.jpg","description":"service is available in all parts of India","offers":"avai 50% discount"},
    {"name":"PizzaHut","image_url":"../../assets/images/image8.jpg","description":"service is available in all parts of India","offers":"avai 50% discount"},
   
  ]
  constructor() { }

  ngOnInit(): void {
    this.dummyArray = this.restaurent_Arr;
  }

}
