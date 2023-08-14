import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';

const routes: Routes = [
  {path:'',component:DashbordComponent},
  {path:'',redirectTo:'dashbord',pathMatch:'full'},
  {path:'employee',component:DashbordComponent},
  {path:'gallery',component:DashbordComponent},
  {path:'contact',component:DashbordComponent},
  {path:'leads',component:DashbordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
