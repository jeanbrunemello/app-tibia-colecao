import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from '../itemInterface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  ) { }

  ngOnInit() {
    const UrlId = this.activatedRoute.snapshot.paramMap.get("id");
    this.service.getById(parseInt(UrlId!)).subscribe((item) => {
      this.item = item
    })
  }

  deleteItem() {
    if(this.item.id)
    this.service.deleteItem(this.item.id!).subscribe(() => {
      this.router.navigate(["/home"])
    })
  }

  cancel() {
    this.router.navigate(["/home"])
  }
}
