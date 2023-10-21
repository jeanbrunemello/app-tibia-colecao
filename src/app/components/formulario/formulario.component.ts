import { ItemService } from 'src/app/services/item.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Item } from '../itemInterface';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaxLengthValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  itemClass: string = "";
  itemClasses: string[] = ["Armors", "Amulets", "Bags and Backpacks", "Boots", "Decoration", "Helmets and Hats", "Legs", "Quivers", "Rings", "Shields", "Spellbooks", "Axes", "Clubs", "Distance", "Swords", "Wands and Rods"];
  form!:FormGroup;

  // item: Item = {
  //   id: 0,
  //   nome: "",
  //   categoria: "",
  //   imagem: "",
  //   possui: false
  // }


  constructor(private service: ItemService, private router: Router, private formBuilder:FormBuilder, private _snackBar: MatSnackBar) { 
    
  }
  
  ngOnInit(){
    this.form = this.formBuilder.group({
      nome: ["", Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(35)])],
      categoria: ["", [Validators.required]],
      imagem: ["", Validators.compose([Validators.required, Validators.minLength(9)])],
      possui: [false]
    })
  }
  // MarkAsOwned(event: any){
  //   console.log(event.target.checked)
  //   this.item.possui = event.target.checked
  //   console.log(this.item.possui)
  // }

  AddItemToDatabase() {
    try {
      this.service.addItem(this.form.value).subscribe((resposta) => {
        console.log("enviado");
        this.openSnackBar(`Item ${resposta.nome} criado com sucesso`);
        this.form.reset();
      });
    } catch (error) {
      console.error("Ocorreu um erro ao adicionar o item ao banco de dados:", error);
      this.openSnackBar("Ocorreu um erro ao adicionar o item ao banco de dados");
    }
  }

  CancelAndClose() {
    this.router.navigate(["/home"])
  }

  openSnackBar(msg:string) {
    this._snackBar.open(`${msg}`, 'Close', {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 2500, //miliseconds
    });
  }

}
