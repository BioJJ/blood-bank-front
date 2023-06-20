import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesFormComponent } from './candidates-form/candidates-form.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';

const routes: Routes = [
  { path: 'candidates-form', component: CandidatesFormComponent},
  { path: 'candidates-form/:id' , component: CandidatesFormComponent },
  { path: 'candidates-list', component: CandidatesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
