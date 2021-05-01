import { Component, OnInit } from '@angular/core';
import { IRange } from 'src/app/model/range';
import { IStatistics } from 'src/app/model/statistics';
import { StatisticsService } from './statistics.service';

@Component({
  templateUrl: './statistics.component.html',
})
export class StatisticsComponent implements OnInit {


  // Statistics result
  defeatsInRowPlayerOne: number;
  defeatsInRowPlayerTwo: number;
  numberOfMatchPlayerOne: number;
  numberOfMatchPlayerTwo: number;
  profitPlayerOne: number;
  profitPlayerTwo: number;
  setsPerMatchPlayerOne: number;
  setsPerMatchPlayerTwo: number;
  rangesPlayerOne: IRange[];
  rangesPlayerTwo: IRange[];

  rangeSelectedPlayerOne: string = "undefined";
  rangeSelectedPlayerTwo: string = "undefined";

  rangeToRadarPlayerOne: IRange;
  rangeToRadarPlayerTwo: IRange;

  // Statistics after the range is selected
  numberOfMatchByRangeAllPlayerOne: number;
  numberOfMatchByRangeHardPlayerOne: number;
  numberOfMatchByRangeGrassPlayerOne: number;
  numberOfMatchByRangeClayPlayerOne: number;
  numberOfMatchByRangeAllPlayerTwo: number;
  numberOfMatchByRangeHardPlayerTwo: number;
  numberOfMatchByRangeGrassPlayerTwo: number;
  numberOfMatchByRangeClayPlayerTwo: number;
  oddsAverageByRangeAllPlayerOne: number;
  oddsAverageByRangeHardPlayerOne: number;
  oddsAverageByRangeGrassPlayerOne: number;
  oddsAverageByRangeClayPlayerOne: number;
  oddsAverageByRangeAllPlayerTwo: number;
  oddsAverageByRangeHardPlayerTwo: number;
  oddsAverageByRangeGrassPlayerTwo: number;
  oddsAverageByRangeClayPlayerTwo: number;


  constructor(private statisticsService: StatisticsService) {

  }

  ngOnInit(): void {
    this.defeatsInRowPlayerOne = this.statisticsService.getDefeatsInRowPlayerOne();
    this.numberOfMatchPlayerOne = this.statisticsService.getNumberOfMatchPlayerOne();
    this.profitPlayerOne = this.statisticsService.getProfitPlayerOne();
    this.setsPerMatchPlayerOne = this.statisticsService.getSetsPerMatchPlayerOne();
    this.rangesPlayerOne = this.statisticsService.getRangesPlayerOne();
    this.defeatsInRowPlayerTwo = this.statisticsService.getDefeatsInRowPlayerTwo();
    this.numberOfMatchPlayerTwo = this.statisticsService.getNumberOfMatchPlayerTwo();
    this.profitPlayerTwo = this.statisticsService.getProfitPlayerTwo();
    this.setsPerMatchPlayerTwo = this.statisticsService.getSetsPerMatchPlayerTwo();
    this.rangesPlayerTwo = this.statisticsService.getRangesPlayerTwo();
  }

  selectRangePlayerOne(range: IRange) {
    this.initPlayerOne();
    this.rangeSelectedPlayerOne = range.lowOdds + " - " + range.highOdds;
    this.rangeToRadarPlayerOne = this.rangesPlayerOne.find(data => data.lowOdds == range.lowOdds && data.highOdds == range.highOdds);
    this.statisticsOfRangePlayerOne();
  }

  selectRangePlayerTwo(range: IRange) {
    this.initPlayerTwo();
    this.rangeSelectedPlayerTwo = range.lowOdds + " - " + range.highOdds;
    this.rangeToRadarPlayerTwo = this.rangesPlayerTwo.find(data => data.lowOdds == range.lowOdds && data.highOdds == range.highOdds);
    this.statisticsOfRangePlayerTwo();
  }

  statisticsOfRangePlayerOne() {
    if(this.rangeToRadarPlayerOne.all != null) {
      this.numberOfMatchByRangeAllPlayerOne = this.rangeToRadarPlayerOne.all.numberOfMatches;
      this.oddsAverageByRangeAllPlayerOne = this.rangeToRadarPlayerOne.all.oddsAverage;
    }
    if(this.rangeToRadarPlayerOne.hard != null) {
      this.numberOfMatchByRangeHardPlayerOne = this.rangeToRadarPlayerOne.hard.numberOfMatches;
      this.oddsAverageByRangeHardPlayerOne = this.rangeToRadarPlayerOne.hard.oddsAverage;
    }
    if(this.rangeToRadarPlayerOne.grass != null) {
      this.numberOfMatchByRangeGrassPlayerOne = this.rangeToRadarPlayerOne.grass.numberOfMatches;
      this.oddsAverageByRangeGrassPlayerOne = this.rangeToRadarPlayerOne.grass.oddsAverage;
    }
    if(this.rangeToRadarPlayerOne.clay != null) {
      this.numberOfMatchByRangeClayPlayerOne = this.rangeToRadarPlayerOne.clay.numberOfMatches;
      this.oddsAverageByRangeClayPlayerOne = this.rangeToRadarPlayerOne.clay.oddsAverage;
    }
  }

  statisticsOfRangePlayerTwo() {
    if(this.rangeToRadarPlayerTwo.all != null) {
      this.numberOfMatchByRangeAllPlayerTwo = this.rangeToRadarPlayerTwo.all.numberOfMatches;
      this.oddsAverageByRangeAllPlayerTwo = this.rangeToRadarPlayerTwo.all.oddsAverage;
    }
    if(this.rangeToRadarPlayerTwo.hard != null) {
      this.numberOfMatchByRangeHardPlayerTwo = this.rangeToRadarPlayerTwo.hard.numberOfMatches;
      this.oddsAverageByRangeHardPlayerTwo = this.rangeToRadarPlayerTwo.hard.oddsAverage;
    }
    if(this.rangeToRadarPlayerTwo.grass != null) {
      this.numberOfMatchByRangeGrassPlayerTwo = this.rangeToRadarPlayerTwo.grass.numberOfMatches;
      this.oddsAverageByRangeGrassPlayerTwo = this.rangeToRadarPlayerTwo.grass.oddsAverage;
    }
    if(this.rangeToRadarPlayerTwo.clay != null) {
      this.numberOfMatchByRangeClayPlayerTwo = this.rangeToRadarPlayerTwo.clay.numberOfMatches;
      this.oddsAverageByRangeClayPlayerTwo = this.rangeToRadarPlayerTwo.clay.oddsAverage;
    }
  }

  initPlayerOne() {
    this.numberOfMatchByRangeAllPlayerOne = 0;
    this.numberOfMatchByRangeHardPlayerOne = 0;
    this.numberOfMatchByRangeGrassPlayerOne = 0;
    this.numberOfMatchByRangeClayPlayerOne = 0;
    this.oddsAverageByRangeAllPlayerOne = 0;
    this.oddsAverageByRangeHardPlayerOne = 0;
    this.oddsAverageByRangeGrassPlayerOne = 0;
    this.oddsAverageByRangeClayPlayerOne = 0;
  }

  initPlayerTwo() {
    this.numberOfMatchByRangeAllPlayerTwo = 0;
    this.numberOfMatchByRangeHardPlayerTwo = 0;
    this.numberOfMatchByRangeGrassPlayerTwo = 0;
    this.numberOfMatchByRangeClayPlayerTwo = 0;
    this.oddsAverageByRangeAllPlayerTwo = 0;
    this.oddsAverageByRangeHardPlayerTwo = 0;
    this.oddsAverageByRangeGrassPlayerTwo = 0;
    this.oddsAverageByRangeClayPlayerTwo = 0;
  }

}