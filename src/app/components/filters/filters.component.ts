import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  categoriesBody: string[] = ["Armors", "Amulets", "Boots", "Helmets and Hats", "Legs", "Quivers", "Rings"]
  categoriesWeapons: string[] = ["Axes", "Clubs", "Distance", "Swords", "Wands and Rods"]
  categoriesShields: string[] = ["Shields", "Spellbooks"]
  categoriesOthers: string[] = ["Bags and Backpacks", "Decoration"]
}
