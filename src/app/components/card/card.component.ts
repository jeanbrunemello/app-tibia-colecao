import { Component, Input } from '@angular/core';
import { Item } from '../itemInterface';

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
}
