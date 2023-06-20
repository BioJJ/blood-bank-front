import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesFormComponent } from './candidates-form/candidates-form.component';
import { FormsModule } from '@angular/forms';
import { CandidatesListComponent } from './candidates-list/candidates-list.component';

@NgModule({
  declarations: [CandidatesFormComponent, CandidatesListComponent],
  imports: [CommonModule, CandidatesRoutingModule, FormsModule],
  exports: [CandidatesFormComponent, CandidatesListComponent],
})
export class CandidatesModule {}
