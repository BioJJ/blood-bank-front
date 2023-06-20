import { Component, OnInit } from '@angular/core';
import { Candidate } from '../canditate';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidates-form',
  templateUrl: './candidates-form.component.html',
  styleUrls: ['./candidates-form.component.css'],
})
export class CandidatesFormComponent implements OnInit {
  candidate: Candidate;
  success: boolean = false;
  errors: String[] = [];
  id: number | null = null;

  constructor(
    // private service: ClientesService ,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.candidate = new Candidate();
  }

  ngOnInit(): void {}

  onSubmit(){}

  voltarParaListagem(){
    this.router.navigate(['/candidates/lista'])
  }
}
