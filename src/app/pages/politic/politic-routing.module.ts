import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticComponent } from './politic.component';

const routes: Routes = [{ path: '', component: PoliticComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticRoutingModule { }
