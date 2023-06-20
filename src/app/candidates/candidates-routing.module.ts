import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesFormComponent } from './candidates-form/candidates-form.component';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: 'candidates',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'form', component: CandidatesFormComponent },
      { path: 'form/:id', component: CandidatesFormComponent },
      { path: 'list', component: CandidatesListComponent },
      { path: '', redirectTo : '/candidates/list', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidatesRoutingModule {}
