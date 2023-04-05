import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Item } from '../itemInterface';
import { MatDialog } from '@angular/material/dialog';
import { DeleteItemComponent } from '../delete-item/delete-item.component';

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
  
  constructor(public dialog: MatDialog, public activatedRoute: ActivatedRoute){}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DeleteItemComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(){

  }
}

