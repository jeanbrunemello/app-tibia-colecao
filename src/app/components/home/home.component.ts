import { Item } from 'src/app/components/itemInterface';
import { ItemService } from 'src/app/services/item.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listCards: Item[] = [];
  skip = 0
  take = 25
  pageSize = 25
  pageIndex = 0
  buscandoDados = "Buscando base de dados"
  categoryRoute: any;

  constructor(private service: ItemService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activatedRoute.paramMap.subscribe(params => {
      this.categoryRoute = params.get("id");
    })
    this.startApplication();
  }

  startApplication() {
    if (this.categoryRoute) {
      this.getItemsByCategory()
    } else {
      this.getAllItems()
    }
  }


  getItemsByCategory() {
    try {
      this.service.getByCategory(this.categoryRoute).subscribe((itemList) => {
        console.log(itemList)
        if (itemList && itemList.length > 0) {
          this.listCards.push(...itemList);
        } else {
          console.log('A resposta está válida, mas vazia.');
          this.buscandoDados = "Nenhum item encontrado";
        }
        return this.listCards;
      })
    } catch {
      console.log()
    }
  }

  getAllItems() {
    this.service.getAllItems(this.skip, this.take).subscribe((itemList) => {
      //this.listCards = itemList
      return this.listCards.push(...itemList);
    })
  }


  loadMore() {
    if (this.categoryRoute) {
      return
    } else if (this.skip <= this.listCards.length) {
      this.pageIndex++
      console.log("pagina " + this.pageIndex)
      this.skip = this.pageSize * this.pageIndex
      console.log("skip " + this.skip)
      //this.take = this.pageSize + this.take
      this.getAllItems()
      console.log(this.take)
    }

  }

}
