import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesFormComponent } from './candidates-form/candidates-form.component';

const routes: Routes = [
  { path: 'candidates-form', component: CandidatesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
