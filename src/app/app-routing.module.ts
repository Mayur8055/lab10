import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterWordComponent } from './filter-word/filter-word.component';
import { UseSvcComponent } from './use-svc/use-svc.component';
import { UseHttpComponent } from './use-http/use-http.component';

const routes: Routes = [
  {path:"filter",component:FilterWordComponent},
  {path : "fbService",component:UseSvcComponent},
  {path : "Http",component:UseHttpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
