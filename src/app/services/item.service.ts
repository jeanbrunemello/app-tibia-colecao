import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../components/itemInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  apiUrl = "https://localhost:7122/ItemApi";
  //apiGetAllPagination = `?skip=${}&take=${}`

  getAllItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.apiUrl)
  }
  
  addItem(itemCadastrar: Item): Observable<Item>{
    return this.http.post<Item>(this.apiUrl, itemCadastrar)
  }
}
