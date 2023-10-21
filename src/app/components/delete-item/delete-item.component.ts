import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from '../itemInterface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent {

  item: Item = {
    id: 10,
    nome: "",
    categoria: "",
    imagem: "",
    possui: false
  }

  constructor(
    private service: ItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    const UrlId = this.activatedRoute.snapshot.paramMap.get("id");
    this.service.getById(parseInt(UrlId!)).subscribe((item) => {
      this.item = item
    })
  }

  deleteItem() {
    try {
      if (this.item.id) {
        this.service.deleteItem(this.item.id!).subscribe((resposta) => {
          console.log(resposta)
          this.openSnackBar(`Item excluído com sucesso`);
          this.router.navigate(["/home"]);
        });
      }
    } catch (error) {
      console.error("Ocorreu um erro ao excluir o item:", error);
      this.openSnackBar(`Erro ao excluir o item`);
    }
  }
  
  cancel() {
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
