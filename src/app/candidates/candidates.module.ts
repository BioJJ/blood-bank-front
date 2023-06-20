import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CandidatesFormComponent } from './candidates-form/candidates-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CandidatesFormComponent],
  imports: [CommonModule, CandidatesRoutingModule, FormsModule],
  exports: [CandidatesFormComponent],
})
export class CandidatesModule {}
