import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from '../itemInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


constructor(private service: ItemService, private ActivatedRoute: ActivatedRoute){

}

  categoriesBody: string[] = ["Armors", "Amulets", "Boots", "Helmets and Hats", "Legs", "Quivers", "Rings"]
  categoriesWeapons: string[] = ["Axes", "Clubs", "Distance", "Swords", "Wands and Rods"]
  categoriesShields: string[] = ["Shields", "Spellbooks"]
  categoriesOthers: string[] = ["Bags and Backpacks", "Decoration"]
  
ngOnInit(){}

}
