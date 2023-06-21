import { Component, OnInit } from '@angular/core';
import { Candidate } from '../canditate';
import { CandidatesService } from 'src/app/candidates.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css'],
})
export class CandidatesListComponent implements OnInit {
  candidates?: Candidate[] | any = [];
  candidateSelecionado!: Candidate;
  mensagemSucesso: string = '';
  mensagemErro: string = '';

  totalElementos? = 0;
  pagina? = 0;
  tamanho = 10;
  pageSizeOptions: number[] = [10];

  colunas = [ 'id', 'nome', 'email'];

  constructor(private service: CandidatesService, private router: Router) {}

  ngOnInit(): void {
    this.listarCandidates(this.pagina, this.tamanho);
  }

  listarCandidates(pagina = 0, tamanho = 5) {
    this.service.list(pagina, tamanho).subscribe((response) => {
      this.candidates = response.content;
      this.totalElementos = response.totalElements;
      this.pagina = response.number;
    });
  }

  paginar(event: PageEvent) {
    this.pagina = event.pageIndex;
    this.listarCandidates(this.pagina, this.tamanho);
  }

  novoCadastro() {
    this.router.navigate(['/candidates/form']);
  }

  preparaDelecao(candidate: Candidate) {
    this.candidateSelecionado = candidate;
  }

  deletarCandidate() {
    this.service.deletar(this.candidateSelecionado).subscribe(
      (response) => {
        this.mensagemSucesso = 'Candidate deletado com sucesso!';
        this.ngOnInit();
      },
      (erro) => (this.mensagemErro = 'Ocorreu um erro ao deletar o Candidate.')
    );
  }
}
