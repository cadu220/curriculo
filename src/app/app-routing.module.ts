import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjetoComponent } from './projeto/projeto.component';


const routes: Routes = [
  {
path:'',
component: HomeComponent
//loadChildren:() => import('./home/home.component').then(h=>h.HomeComponent)
},
{
  path:'projeto',
  component: ProjetoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
