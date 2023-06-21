import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CandidatesByState } from './home/CandidatesByState';
import { Observable } from 'rxjs';
import { AverageAgeByBloodType } from './home/AverageAgeByBloodType';
import { DonorsForEachBloodType } from './home/DonorsForEachBloodType';
import { PercentObese } from './home/PercentObese';


@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiURL: string = environment.apiURLBase + '/api/dashboard';

  constructor(private http: HttpClient) {}

  getCandidateByState(): Observable<CandidatesByState[]> {
    return this.http.get<CandidatesByState[]>(
      this.apiURL + '/candidate-by-state'
    );
  }

  getAverageAgeByBloodType(): Observable<AverageAgeByBloodType[]> {
    return this.http.get<AverageAgeByBloodType[]>(
      this.apiURL + '/average-age-by-blood-type'
    );
  }

  getDonorsForEachBloodType(): Observable<DonorsForEachBloodType[]> {
    return this.http.get<DonorsForEachBloodType[]>(
      this.apiURL + '/donors-for-each-blood-type'
    );
  }

  getPercentageObeseMen(): Observable<PercentObese[]> {
    return this.http.get<PercentObese[]>(
      this.apiURL + '/percent-obese-men'
    );
  }

  getPercentageObeseWomen(): Observable<PercentObese[]> {
    return this.http.get<PercentObese[]>(
      this.apiURL + '/percentage-obese-woman'
    );
  }
}
