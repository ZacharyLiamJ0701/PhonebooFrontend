import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientListComponent} from './client/client-list/client-list.component';
import {ClientDetailsComponent} from './client/client-details/client-details.component';
import {AddClientComponent} from './client/add-client/add-client.component';


const routes: Routes = [
  {path: '', redirectTo: 'client', pathMatch: 'full'},
  {path: 'client', component: ClientListComponent},
  {path: 'client/:id', component:ClientDetailsComponent},
  {path: 'add', component:AddClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
