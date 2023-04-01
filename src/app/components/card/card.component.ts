import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  itemCard = {
    id: 1,
    itemName: "Carlin Sword",
    category: "Swords",
    sprite: "https://static.tibia.com/images/library/cultacolyte.gif",
    owns: false
  }

}
