import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Item } from '../itemInterface';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from '../delete-item/delete-item.component';
import { MatChipInputEvent } from '@angular/material/chips';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() itemCard: Item = {
    id: 0,
    nome: 'item name',
    categoria: 'item category',
    imagem: 'sprite url',
    possui: false
  }

  owns: string = ""

  constructor(public dialog: MatDialog, public activatedRoute: ActivatedRoute, private service: ItemService) { }

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(DeleteItemComponent, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }

  ngOnInit() {
    this.UpdateOwnsText()

  }

  UpdateOwnsText() {
    if (this.itemCard.possui === true) {
      this.owns = "Collected"
    }
    else {
      this.owns = "Not owned";
    }
  }

  ChangeOwns() {
    this.itemCard.possui = !this.itemCard.possui
    console.log(this.itemCard)
    this.service.UpdateItem(this.itemCard).subscribe( () =>{
      this.UpdateOwnsText()
    })
  }
}


