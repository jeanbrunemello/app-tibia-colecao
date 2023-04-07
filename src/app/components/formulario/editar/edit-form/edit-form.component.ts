import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/components/itemInterface';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {

  itemClass: string = "Boots";
  itemClasses: string[] = ["Armors", "Amulets", "Bags and Backpacks", "Boots", "Decoration", "Helmets and Hats", "Legs", "Quivers", "Rings", "Shields", "Spellbooks", "Axes", "Clubs", "Distance", "Swords", "Wands and Rods"];

  item: Item = {
    id: 0,
    nome: "",
    categoria: "",
    imagem: "https://static.tibia.com/images/library/cultacolyte.gif",
    possui: false
  }


  constructor(private service: ItemService, private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.getItemFromDatabase();

  }

  getItemFromDatabase() {
    const activatedRouteId = this.activatedRoute.snapshot.paramMap.get("id")
    this.service.getById(parseInt(activatedRouteId!)).subscribe((itemBancoDeDados) => {
      this.item = itemBancoDeDados
    })
  }

  EditItem() {
this.service.UpdateItem(this.item).subscribe( () => {
  this.router.navigate(["/home"])
})
  }

  CancelAndClose() {
    this.router.navigate(["/home"])
  }

  ChangeItemClass(event: any) {
    console.log(event.value)
    this.item.categoria = event.value
  }
}
