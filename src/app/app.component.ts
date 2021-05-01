import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPeriod } from 'src/app/model/period';
import { IPlayer } from 'src/app/model/player';
import { IStatistics } from 'src/app/model/statistics';
import { AppService } from './app.service';
import { StatisticsService } from './statistics/statistics.service';

@Component({
  selector: 'tennis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Search Bar
  playerList: IPlayer[];
  players: string[] = [];
  _playerOne: string;
  _playerTwo: string;

  // Statistics result
  statisticsPlayerOne: IStatistics;
  statisticsPlayerTwo: IStatistics;

  // Period selected (only one can be true per player at time)
  isPeriodAllOne: boolean = false;
  isPeriodSixMonthOne: boolean = false;
  isPeriodOneYearOne: boolean = false;
  isPeriodTwoYearOne: boolean = false;
  isPeriodAllTwo: boolean = false;
  isPeriodSixMonthTwo: boolean = false;
  isPeriodOneYearTwo: boolean = false;
  isPeriodTwoYearTwo: boolean = false;
  // Dropdown Period Player One
  dropdownPeriodPlayerOne: boolean = false;
  dropdownPeriodAllOne: boolean = false;
  dropdownPeriodOneYearOne: boolean = false;
  dropdownPeriodTwoYearOne: boolean = false;
  dropdownPeriodSixMonthOne: boolean = false;
  // Dropdown Period Player Two
  dropdownPeriodPlayerTwo: boolean = false;
  dropdownPeriodAllTwo: boolean = false;
  dropdownPeriodOneYearTwo: boolean = false;
  dropdownPeriodTwoYearTwo: boolean = false;
  dropdownPeriodSixMonthTwo: boolean = false;
  // Dropdown Level Player One
  dropdownLevelPlayerOne: boolean = false;
  dropdownLevelAllOne: boolean = false;
  dropdownLevelAtpOne: boolean = false;
  dropdownLevelMastersOne: boolean = false;
  dropdownLevelGrandSlamOne: boolean = false;
  // Dropdown Level Player Two
  dropdownLevelPlayerTwo: boolean = false;
  dropdownLevelAllTwo: boolean = false;
  dropdownLevelAtpTwo: boolean = false;
  dropdownLevelMastersTwo: boolean = false;
  dropdownLevelGrandSlamTwo: boolean = false;

  constructor(private appService: AppService,
    private statisticsService: StatisticsService,
    private route: Router) {

  }

  ngOnInit(): void {
    this.appService.getAllPlayers().subscribe(
      data => {
        this.playerList = data;
        for (let entry of this.playerList) {
          this.players.push(entry.name);
        }
      }
    );
  }

  searchPlayerOne() {
    this.initPlayerOne();
    let id = this.getIdFromName(this.playerOne);
    this.appService.getStatistics(id).subscribe(data => {
      this.statisticsPlayerOne = data;
      this.displayPeriodOne();
    });
    this.reloadPage();
  }

  searchPlayerTwo() {
    this.initPlayerTwo();
    let id = this.getIdFromName(this.playerTwo);
    this.appService.getStatistics(id).subscribe(data => { 
      this.statisticsPlayerTwo = data;
      this.displayPeriodTwo();
    });
    this.reloadPage();
  }

  getIdFromName(player: string) {
    for (let entry of this.playerList) {
      if (entry.name == player) {
        return entry.id;
      }
    }
  }

  selectAllPeriodOne() {
    this.initLevelOne();
    this.displayLevelOne(this.statisticsPlayerOne.all);
    this.statisticsService.setNumberOfMatchPlayerOne(null);
    this.statisticsService.setProfitPlayerOne(null);
    this.statisticsService.setRangesPlayerOne(null);
    this.statisticsService.setSetsPerMatchPlayerOne(null);
    this.statisticsService.setDefeatsInRowPlayerOne(null);
    this.isPeriodAllOne = true;
    this.reloadPage();
   }

  selectAllPeriodTwo() {

    this.initLevelTwo();
    this.displayLevelTwo(this.statisticsPlayerTwo.all);
    this.statisticsService.setNumberOfMatchPlayerTwo(null);
    this.statisticsService.setProfitPlayerTwo(null);
    this.statisticsService.setRangesPlayerTwo(null);
    this.statisticsService.setSetsPerMatchPlayerTwo(null);
    this.statisticsService.setDefeatsInRowPlayerTwo(null);
    this.isPeriodAllTwo = true;
    this.reloadPage();
  }

  selectSixMonthPeriodOne() {
    this.initLevelOne();
    this.displayLevelOne(this.statisticsPlayerOne.sixMonth);
    this.statisticsService.setNumberOfMatchPlayerOne(null);
    this.statisticsService.setProfitPlayerOne(null);
    this.statisticsService.setRangesPlayerOne(null);
    this.statisticsService.setSetsPerMatchPlayerOne(null);
    this.statisticsService.setDefeatsInRowPlayerOne(null);
    this.isPeriodSixMonthOne = true;
    this.reloadPage();
  }

  selectSixMonthPeriodTwo() {
    this.initLevelTwo();
    this.displayLevelTwo(this.statisticsPlayerTwo.sixMonth);
    this.statisticsService.setNumberOfMatchPlayerTwo(null);
    this.statisticsService.setProfitPlayerTwo(null);
    this.statisticsService.setRangesPlayerTwo(null);
    this.statisticsService.setSetsPerMatchPlayerTwo(null);
    this.statisticsService.setDefeatsInRowPlayerTwo(null);
    this.isPeriodSixMonthTwo = true;
    this.reloadPage();
  }

  selectOneYearPeriodOne() {
    this.initLevelOne();
    this.displayLevelOne(this.statisticsPlayerOne.oneYear);
    this.statisticsService.setNumberOfMatchPlayerOne(null);
    this.statisticsService.setProfitPlayerOne(null);
    this.statisticsService.setRangesPlayerOne(null);
    this.statisticsService.setSetsPerMatchPlayerOne(null);
    this.statisticsService.setDefeatsInRowPlayerOne(null);
    this.isPeriodOneYearOne = true;
    this.reloadPage();
  }

  selectOneYearPeriodTwo() {
    this.initLevelTwo();
    this.displayLevelTwo(this.statisticsPlayerTwo.oneYear);
    this.statisticsService.setNumberOfMatchPlayerTwo(null);
    this.statisticsService.setProfitPlayerTwo(null);
    this.statisticsService.setRangesPlayerTwo(null);
    this.statisticsService.setSetsPerMatchPlayerTwo(null);
    this.statisticsService.setDefeatsInRowPlayerTwo(null);
    this.isPeriodOneYearTwo = true;
    this.reloadPage();
  }

  selectTwoYearPeriodOne() {
    this.initLevelOne();
    this.displayLevelOne(this.statisticsPlayerOne.twoYear);
    this.statisticsService.setNumberOfMatchPlayerOne(null);
    this.statisticsService.setProfitPlayerOne(null);
    this.statisticsService.setRangesPlayerOne(null);
    this.statisticsService.setSetsPerMatchPlayerOne(null);
    this.statisticsService.setDefeatsInRowPlayerOne(null);
    this.isPeriodTwoYearOne = true;
    this.reloadPage();
  }

  selectTwoYearPeriodTwo() {
    this.initLevelTwo();
    this.displayLevelTwo(this.statisticsPlayerTwo.twoYear);
    this.statisticsService.setNumberOfMatchPlayerTwo(null);
    this.statisticsService.setProfitPlayerTwo(null);
    this.statisticsService.setRangesPlayerTwo(null);
    this.statisticsService.setSetsPerMatchPlayerTwo(null);
    this.statisticsService.setDefeatsInRowPlayerTwo(null);
    this.isPeriodTwoYearTwo = true;
    this.reloadPage();
  }

  displayPeriodOne() {
    if(this.statisticsPlayerOne == null) {
      return;
    }
    this.dropdownPeriodPlayerOne = true;
    if (this.statisticsPlayerOne.all != null) {
      this.dropdownPeriodAllOne = true;
    }
    if (this.statisticsPlayerOne.sixMonth != null) {
      this.dropdownPeriodSixMonthOne = true;
    }
    if (this.statisticsPlayerOne.oneYear != null) {
      this.dropdownPeriodOneYearOne = true;
    }
    if (this.statisticsPlayerOne.twoYear != null) {
      this.dropdownPeriodTwoYearOne = true;
    }
  }

  displayPeriodTwo() {
    if(this.statisticsPlayerTwo == null) {
      return;
    }
    this.dropdownPeriodPlayerTwo = true;
    if (this.statisticsPlayerTwo.all != null) {
      this.dropdownPeriodAllTwo = true;
    }
    if (this.statisticsPlayerTwo.sixMonth != null) {
      this.dropdownPeriodSixMonthTwo = true;
    }
    if (this.statisticsPlayerTwo.oneYear != null) {
      this.dropdownPeriodOneYearTwo = true;
    }
    if (this.statisticsPlayerTwo.twoYear != null) {
      this.dropdownPeriodTwoYearTwo = true;
    }
  }

  displayLevelOne(period: IPeriod) {
    this.dropdownLevelPlayerOne = true;
    if (period.all != null) {
      this.dropdownLevelAllOne = true;
    }
    if (period.atp != null) {
      this.dropdownLevelAtpOne = true;
    }
    if (period.grandSlam != null) {
      this.dropdownLevelGrandSlamOne = true;
    }
    if (period.masters != null) {
      this.dropdownLevelMastersOne = true;
    }
  }

  displayLevelTwo(period: IPeriod) {
    this.dropdownLevelPlayerTwo = true;
    if (period.all != null) {
      this.dropdownLevelAllTwo = true;
    }
    if (period.atp != null) {
      this.dropdownLevelAtpTwo = true;
    }
    if (period.grandSlam != null) {
      this.dropdownLevelGrandSlamTwo = true;
    }
    if (period.masters != null) {
      this.dropdownLevelMastersTwo = true;
    }
  }

  sendDataAllLevelOne() {
    this.statisticsService.setDefeatsInRowPlayerOne(this.statisticsPlayerOne.defeatsInRow);
    if(this.isPeriodAllOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.all.all.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.all.all.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.all.all.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.all.all.ranges);
    }
    if(this.isPeriodSixMonthOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.sixMonth.all.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.sixMonth.all.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.sixMonth.all.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.sixMonth.all.ranges);
    }
    if(this.isPeriodOneYearOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.oneYear.all.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.oneYear.all.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.oneYear.all.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.oneYear.all.ranges);
    }
    if(this.isPeriodTwoYearOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.twoYear.all.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.twoYear.all.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.twoYear.all.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.twoYear.all.ranges);
    }
    this.reloadPage();
  }

  sendDataAllLevelTwo() {
    this.statisticsService.setDefeatsInRowPlayerTwo(this.statisticsPlayerTwo.defeatsInRow);
    if(this.isPeriodAllTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.all.all.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.all.all.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.all.all.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.all.all.ranges);
    }
    if(this.isPeriodSixMonthTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.sixMonth.all.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.sixMonth.all.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.sixMonth.all.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.sixMonth.all.ranges);
    }
    if(this.isPeriodOneYearTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.oneYear.all.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.oneYear.all.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.oneYear.all.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.oneYear.all.ranges);
    }
    if(this.isPeriodTwoYearTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.twoYear.all.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.twoYear.all.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.twoYear.all.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.twoYear.all.ranges);
    }
    this.reloadPage();
  }

  sendDataAtpLevelOne() {
    this.statisticsService.setDefeatsInRowPlayerOne(this.statisticsPlayerOne.defeatsInRow);
    if(this.isPeriodAllOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.all.atp.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.all.atp.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.all.atp.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.all.atp.ranges);
    }
    if(this.isPeriodSixMonthOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.sixMonth.atp.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.sixMonth.atp.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.sixMonth.atp.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.sixMonth.atp.ranges);
    }
    if(this.isPeriodOneYearOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.oneYear.atp.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.oneYear.atp.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.oneYear.atp.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.oneYear.atp.ranges);
    }
    if(this.isPeriodTwoYearOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.twoYear.atp.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.twoYear.atp.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.twoYear.atp.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.twoYear.atp.ranges);
    }
    this.reloadPage();
  }

  sendDataAtpLevelTwo() {
    this.statisticsService.setDefeatsInRowPlayerTwo(this.statisticsPlayerTwo.defeatsInRow);
    if(this.isPeriodAllTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.all.atp.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.all.atp.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.all.atp.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.all.atp.ranges);
    }
    if(this.isPeriodSixMonthTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.sixMonth.atp.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.sixMonth.atp.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.sixMonth.atp.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.sixMonth.atp.ranges);
    }
    if(this.isPeriodOneYearTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.oneYear.atp.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.oneYear.atp.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.oneYear.atp.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.oneYear.atp.ranges);
    }
    if(this.isPeriodTwoYearTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.twoYear.atp.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.twoYear.atp.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.twoYear.atp.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.twoYear.atp.ranges);
    }
    this.reloadPage();
  }

  sendDataGrandSlamLevelOne() {
    this.statisticsService.setDefeatsInRowPlayerOne(this.statisticsPlayerOne.defeatsInRow);
    if(this.isPeriodAllOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.all.grandSlam.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.all.grandSlam.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.all.grandSlam.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.all.grandSlam.ranges);
    }
    if(this.isPeriodSixMonthOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.sixMonth.grandSlam.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.sixMonth.grandSlam.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.sixMonth.grandSlam.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.sixMonth.grandSlam.ranges);
    }
    if(this.isPeriodOneYearOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.oneYear.grandSlam.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.oneYear.grandSlam.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.oneYear.grandSlam.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.oneYear.grandSlam.ranges);
    }
    if(this.isPeriodTwoYearOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.twoYear.grandSlam.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.twoYear.grandSlam.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.twoYear.grandSlam.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.twoYear.grandSlam.ranges);
    }
    this.reloadPage();
  }

  sendDataGrandSlamLevelTwo() {
    this.statisticsService.setDefeatsInRowPlayerTwo(this.statisticsPlayerTwo.defeatsInRow);
    if(this.isPeriodAllTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.all.grandSlam.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.all.grandSlam.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.all.grandSlam.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.all.grandSlam.ranges);
    }
    if(this.isPeriodSixMonthTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.sixMonth.grandSlam.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.sixMonth.grandSlam.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.sixMonth.grandSlam.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.sixMonth.grandSlam.ranges);
    }
    if(this.isPeriodOneYearTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.oneYear.grandSlam.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.oneYear.grandSlam.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.oneYear.grandSlam.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.oneYear.grandSlam.ranges);
    }
    if(this.isPeriodTwoYearTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.twoYear.grandSlam.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.twoYear.grandSlam.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.twoYear.grandSlam.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.twoYear.grandSlam.ranges);
    }
    this.reloadPage();
  }

  sendDataMastersLevelOne() {
    this.statisticsService.setDefeatsInRowPlayerOne(this.statisticsPlayerOne.defeatsInRow);
    if(this.isPeriodAllOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.all.masters.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.all.masters.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.all.masters.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.all.masters.ranges);
    }
    if(this.isPeriodSixMonthOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.sixMonth.masters.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.sixMonth.masters.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.sixMonth.masters.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.sixMonth.masters.ranges);
    }
    if(this.isPeriodOneYearOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.oneYear.masters.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.oneYear.masters.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.oneYear.masters.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.oneYear.masters.ranges);
    }
    if(this.isPeriodTwoYearOne == true) {
      this.statisticsService.setNumberOfMatchPlayerOne(this.statisticsPlayerOne.twoYear.masters.numberOfMatch)
      this.statisticsService.setProfitPlayerOne(this.statisticsPlayerOne.twoYear.masters.profit);
      this.statisticsService.setSetsPerMatchPlayerOne(this.statisticsPlayerOne.twoYear.masters.setsPerMatch);
      this.statisticsService.setRangesPlayerOne(this.statisticsPlayerOne.twoYear.masters.ranges);
    }
    this.reloadPage();
  }

  sendDataMastersLevelTwo() {
    this.statisticsService.setDefeatsInRowPlayerTwo(this.statisticsPlayerTwo.defeatsInRow);
    if(this.isPeriodAllTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.all.masters.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.all.masters.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.all.masters.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.all.masters.ranges);
    }
    if(this.isPeriodSixMonthTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.sixMonth.masters.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.sixMonth.masters.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.sixMonth.masters.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.sixMonth.masters.ranges);
    }
    if(this.isPeriodOneYearTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.oneYear.masters.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.oneYear.masters.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.oneYear.masters.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.oneYear.masters.ranges);
    }
    if(this.isPeriodTwoYearTwo == true) {
      this.statisticsService.setNumberOfMatchPlayerTwo(this.statisticsPlayerTwo.twoYear.masters.numberOfMatch)
      this.statisticsService.setProfitPlayerTwo(this.statisticsPlayerTwo.twoYear.masters.profit);
      this.statisticsService.setSetsPerMatchPlayerTwo(this.statisticsPlayerTwo.twoYear.masters.setsPerMatch);
      this.statisticsService.setRangesPlayerTwo(this.statisticsPlayerTwo.twoYear.masters.ranges);
    }
    this.reloadPage();
  }

  reloadPage() {
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigateByUrl('/statistics');
  }
  
  initPlayerOne() {
    this.statisticsPlayerOne = null;
    this.dropdownPeriodPlayerOne = false;
    this.dropdownLevelPlayerOne = false;
    this.dropdownPeriodAllOne = false;
    this.dropdownPeriodOneYearOne = false;
    this.dropdownPeriodTwoYearOne = false;
    this.dropdownPeriodSixMonthOne = false;
    this.initLevelOne();
    this.statisticsService.setNumberOfMatchPlayerOne(null);
    this.statisticsService.setProfitPlayerOne(null);
    this.statisticsService.setRangesPlayerOne(null);
    this.statisticsService.setSetsPerMatchPlayerOne(null);
    this.statisticsService.setDefeatsInRowPlayerOne(null);
  }

  initPlayerTwo() {
    this.statisticsPlayerTwo = null;
    this.dropdownPeriodPlayerTwo = false;
    this.dropdownLevelPlayerTwo = false;
    this.dropdownPeriodAllTwo = false;
    this.dropdownPeriodOneYearTwo = false;
    this.dropdownPeriodTwoYearTwo = false;
    this.dropdownPeriodSixMonthTwo = false;
    this.initLevelTwo();
    this.statisticsService.setNumberOfMatchPlayerTwo(null);
    this.statisticsService.setProfitPlayerTwo(null);
    this.statisticsService.setRangesPlayerTwo(null);
    this.statisticsService.setSetsPerMatchPlayerTwo(null);
    this.statisticsService.setDefeatsInRowPlayerTwo(null);
  }

  initLevelOne() {
    this.isPeriodAllOne = false;
    this.isPeriodSixMonthOne = false;
    this.isPeriodOneYearOne = false;
    this.isPeriodTwoYearOne = false;
    this.dropdownLevelAllOne = false;
    this.dropdownLevelAtpOne = false;
    this.dropdownLevelMastersOne = false;
    this.dropdownLevelGrandSlamOne = false;
  }

  initLevelTwo() {
    this.isPeriodAllTwo = false;
    this.isPeriodSixMonthTwo = false;
    this.isPeriodOneYearTwo = false;
    this.isPeriodTwoYearTwo = false;
    this.dropdownLevelAllTwo = false;
    this.dropdownLevelAtpTwo = false;
    this.dropdownLevelMastersTwo = false;
    this.dropdownLevelGrandSlamTwo = false;
  }

  get playerOne(): string {
    return this._playerOne;
  }
  set playerOne(value: string) {
    this._playerOne = value;
  }
  get playerTwo(): string {
    return this._playerTwo;
  }
  set playerTwo(value: string) {
    this._playerTwo = value;
  }
}
