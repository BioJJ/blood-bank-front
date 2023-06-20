import { Component, OnInit } from '@angular/core';
import { Candidate } from '../canditate';
import { CandidatesService } from 'src/app/candidates.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit{

  candidates: Candidate[] = [];
  candidateSelecionado!: Candidate;
  mensagemSucesso: string = '';
  mensagemErro: string =  '';

  constructor(
    private service: CandidatesService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getCandidate()
      .subscribe( resposta => this.candidates = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/candidates-form'])
  }

  preparaDelecao(candidate: Candidate){
    this.candidateSelecionado = candidate;
  }

  deletarCandidate(){
    this.service
      .deletar(this.candidateSelecionado)
      .subscribe( 
        response => {
          this.mensagemSucesso = 'Candidate deletado com sucesso!'
          this.ngOnInit();
        },
        erro => this.mensagemErro = 'Ocorreu um erro ao deletar o Candidate.'  
      )
  }


}
