import { ItemService } from 'src/app/services/item.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Item } from '../itemInterface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  itemClass: string = "";
  itemClasses: string[] = ["Armors", "Amulets", "Bags and Backpacks", "Boots", "Decoration", "Helmets and Hats", "Legs", "Quivers", "Rings", "Shields", "Spellbooks", "Axes", "Clubs", "Distance", "Swords", "Wands and Rods"];

  item: Item = {
    id: 0,
    nome: "",
    categoria: "",
    imagem: "https://static.tibia.com/images/library/cultacolyte.gif",
    possui: false
  }

  constructor(private service: ItemService) { }

  // MarkAsOwned(event: any){
  //   console.log(event.target.checked)
  //   this.item.possui = event.target.checked
  //   console.log(this.item.possui)
  // }

  AddItemToDatabase() {
    this.service.addItem(this.item).subscribe(() => {
      console.log("enviado")
      console.log(`O item ${this.item.nome} foi cadastrado com sucesso`)
    })

  }

  CancelAndClose() {

  }

  teste(event: any) {
    console.log(event.value)
    this.item.categoria = event.value
  }
}
