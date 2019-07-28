import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';


const routes: Routes = [
  {path:'ngif',component:NgifComponent},
  {path:'ngfor',component:NgforComponent},
  {path:'ngswitch',component:NgswitchComponent},
  {path:'',redirectTo:'./app.component.html',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
