import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
path:"home",
component:HomeComponent
  },
  {
    path: "createItem",
    component: FormularioComponent
  },
  {
    path: "deleteItem/:id",
    component:DeleteItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
