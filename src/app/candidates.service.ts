import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { Candidate } from './candidates/canditate';
import { PaginaCandidate } from './candidates/PaginaCandidate';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  apiURL: string = environment.apiURLBase + '/api/candidate';

  constructor( private http: HttpClient ) {}

  salvar( candidate: Candidate ) : Observable<Candidate> {
    return this.http.post<Candidate>( `${this.apiURL}` , candidate);
  }

  atualizar( candidate: Candidate ) : Observable<any> {
    return this.http.put<Candidate>(`${this.apiURL}/${candidate.id}` , candidate);
  }

  getCandidate() : Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.apiURL);
  }

  list(page: any, size: any) : Observable<PaginaCandidate> {
    const params = new HttpParams()
    .set('page', page)
    .set('size', size)
    return this.http.get<any>(`${this.apiURL}?${params.toString()}`);
  }
  
  getCandidateById(id: number) : Observable<Candidate> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletar(candidate: Candidate) : Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${candidate.id}`);
  }

}
