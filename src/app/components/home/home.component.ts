import { Item } from './../itemInterface';
import { ItemService } from 'src/app/services/item.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listCards: Item[] = [];

  constructor(private service: ItemService) { }

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems() {
    this.service.getAllItems().subscribe((itemList) => {
      this.listCards = itemList
      console.log(this.listCards);
    })
  }
}
