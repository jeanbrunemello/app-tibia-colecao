import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  form!: FormGroup;


  // item: Item = {
  //   id: 0,
  //   nome: "",
  //   categoria: "",
  //   imagem: "https://static.tibia.com/images/library/cultacolyte.gif",
  //   possui: false
  // }


  constructor(private service: ItemService, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }


  ngOnInit() {
    this.form = this.formBuilder.group({
      id: 0,
      nome: ["", Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(35)])],
      categoria: ["", [Validators.required]],
      imagem: ["", Validators.compose([Validators.required, Validators.minLength(9)])],
      possui: [false],
      horaConsulta: new Date()
    })
    this.getItemFromDatabase();
  }

  getItemFromDatabase(): any {
    const activatedRouteId = this.activatedRoute.snapshot.paramMap.get("id")
    this.service.getById(parseInt(activatedRouteId!)).subscribe((itemBancoDeDados) => {
      this.form.setValue(itemBancoDeDados)
    })
  }

  EditItem() {
    try {
      this.service.UpdateItem(this.form.value).subscribe((resposta) => {
        console.log("atualizado com sucesso")
        console.log(resposta);
        this.openSnackBar(`Item ${resposta.nome} atualizado com sucesso`);
        this.form.reset();
        this.router.navigate(["/home"]);
      });
    } catch (error) {
      console.error("Ocorreu um erro ao editar o item:", error);
      this.openSnackBar(`Erro ao atualizar o item`);
    }
  }
  

  CancelAndClose() {
    this.router.navigate(["/home"])
  }

  openSnackBar(msg: string) {
    this._snackBar.open(`${msg}`, 'Close', {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 2500, //miliseconds
    });
  }

}
