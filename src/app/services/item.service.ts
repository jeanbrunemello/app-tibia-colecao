import { Item } from './../components/itemInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getById(id: number):Observable<Item>{
    const urlToGet = `${this.apiUrl}/${id}`
    return this.http.get<Item>(urlToGet)
  } 

  addItem(itemCadastrar: Item): Observable<Item>{
    return this.http.post<Item>(this.apiUrl, itemCadastrar)
  }

  UpdateItem(itemParaAtualizar: Item): Observable<Item>{
    const urlToEdit = `${this.apiUrl}/${itemParaAtualizar.id}`
    return this.http.put<Item>(urlToEdit, itemParaAtualizar)
  }

  deleteItem(id: number): Observable<Item>{
    const urlToDelete = `${this.apiUrl}/${id}`
    return this.http.delete<Item>(urlToDelete)
  }
}
