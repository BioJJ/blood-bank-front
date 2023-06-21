import { Component, OnInit } from '@angular/core';
import { CandidatesByState } from './CandidatesByState';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { AverageAgeByBloodType } from './AverageAgeByBloodType';
import { DonorsForEachBloodType } from './DonorsForEachBloodType';
import { PercentObese } from './PercentObese';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  candidates: CandidatesByState[] = [];

  averageByBlood: AverageAgeByBloodType[] = [];

  donorsForEachBloodType: DonorsForEachBloodType[] = [];


  percentObeseMen: PercentObese[] = [];

  percentObeseWoman: PercentObese[] = [];

  constructor(
    private service: DashboardService, 
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .getCandidateByState()
      .subscribe( resposta => this.candidates = resposta );

      this.service
      .getAverageAgeByBloodType()
      .subscribe( resposta => this.averageByBlood = resposta );

      this.service
      .getDonorsForEachBloodType()
      .subscribe( resposta => this.donorsForEachBloodType = resposta );

      this.service
      .getPercentageObeseMen()
      .subscribe( resposta => this.percentObeseMen = resposta );

      this.service
      .getPercentageObeseWomen()
      .subscribe( resposta => this.percentObeseWoman = resposta );
  }

}
