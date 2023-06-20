import { Component, OnInit } from '@angular/core';
import { Candidate } from '../canditate';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CandidatesService } from 'src/app/candidates.service';
import { Observable, finalize, tap } from 'rxjs';

@Component({
  selector: 'app-candidates-form',
  templateUrl: './candidates-form.component.html',
  styleUrls: ['./candidates-form.component.css'],
})
export class CandidatesFormComponent implements OnInit {
  candidate: Candidate;
  success: boolean = false;
  errors: string[] | null = null;
  id: number | null = null;

  constructor(
    private service: CandidatesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.candidate = new Candidate();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.pipe(finalize(() => {})).subscribe((urlParams) => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getCandidateById(this.id).subscribe(
          (response) => (this.candidate = response),
          (errorResponse) => (this.candidate = new Candidate())
        );
      }
    });
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.candidate).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          this.errors = ['Erro ao atualizar o cliente.'];
        }
      );
    } else {
      this.service.salvar(this.candidate).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.candidate = response;
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error.errors;
        }
      );
    }
  }

  voltarParaListagem() {
    this.router.navigate(['/candidates-list']);
  }
}
