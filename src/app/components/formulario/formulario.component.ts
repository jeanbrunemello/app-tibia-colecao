import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  itemClass: string = "";
  itemClasses: string[] = ["Armors", "Amulets", "Bags and Backpacks", "Boots", "Decoration", "Helmets and Hats", "Legs", "Quivers", "Rings", "Shields", "Spellbooks", "Axes", "Clubs", "Distance", "Swords", "Wands and Rods"];

  item = {
    id: 1,
    itemName: "",
    category: "",
    sprite: "https://static.tibia.com/images/library/cultacolyte.gif",
    owns: false
  }

  // MarkAsOwned(event: any){
  //   console.log(event.target.checked)
  //   this.item.possui = event.target.checked
  //   console.log(this.item.possui)
  // }

  AddItemToDatabase(){
console.log("enviado")
    console.log(this.item.itemName, this.item.category, this.item.sprite, this.item.owns)
  }

  CancelAndClose(){

  }

  teste(event:any){
    console.log(event.value)
    this.item.category = event.value
  }
}
