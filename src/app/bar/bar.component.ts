import { Component, Input, OnChanges } from "@angular/core";
import { IRange } from "src/app/model/range";

@Component({
    selector: 'tennis-bar',
    templateUrl: './bar.component.html'
})
export class BarComponent implements OnChanges {

    @Input() range: IRange;
    public barChartOptions = {
        legend: {
            labels: {
                fontSize: 20
            }
        },
        title: {
            fontSize: 30
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 20
                }
            }],
            yAxes: [{
                ticks: {
                    fontSize: 20,
                    
                }
            }]
        },
        tooltip: {
            backgroundColor: 'rgba(36, 117, 198, 1)'
        },
        responsive: true
    };
    public barChartLabels;
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartData; 

    // Player's data
    ratioAll: number = 0;
    ratioGrass: number = 0;
    ratioHard: number = 0;
    ratioClay: number = 0;
    // All players data
    allPlayers: number = 0;
    // Profitability
    profitAll: number = 0;
    profitGrass: number = 0;
    profitHard: number = 0;
    profitClay: number = 0;

    isHard:boolean = false;
    isClay: boolean = false;
    isGrass: boolean = false;

    constructor() { }

    ngOnChanges(): void {
        this.initData();
        this.mapData();
        this.selectBarLabelAndData();
    }

    selectBarLabelAndData() {
        if(this.isHard == true 
            && this.isGrass == true
            && this.isClay == true) {

                this.barChartLabels = ['All', 'Hard', 'Clay', 'Grass'];
                this.barChartData = [
                    { data: [this.profitAll, this.profitHard, this.profitClay, this.profitGrass], label: 'Profitability', type: 'line', borderColor: 'rgba(135, 214, 56, 1)', backgroundColor: 'rgba(135, 214, 56, 0)', pointBackgroundColor: "rgba(135, 214, 56, 1)", pointBorderColor:'rgba(135, 214, 56, 1)'},
                    { data: [this.allPlayers, this.allPlayers, this.allPlayers, this.allPlayers], label: 'All Players', type: 'line', borderColor: 'rgba(214, 56, 56, 1)', backgroundColor: 'rgba(214, 56, 56, 0)', pointBackgroundColor: "rgba(214, 56, 56, 1)", pointBorderColor:'rgba(214, 56, 56, 1)'},
                    { data: [this.ratioAll, this.ratioHard, this.ratioClay, this.ratioGrass], label: 'Player', borderColor: 'rgba(56, 135, 214, 1)', backgroundColor: 'rgba(56, 135, 214, 0.8)', pointBackgroundColor: "rgba(56, 135, 214, 1)", pointBorderColor:'rgba(56, 135, 214, 1)', hoverBackgroundColor: 'rgba(23, 96, 170, 1)'}
                ];
        }
        else if(this.isHard == false 
            && this.isGrass == true
            && this.isClay == true) {

                this.barChartLabels = ['All', 'Clay', 'Grass'];
                this.barChartData = [
                    { data: [this.profitAll, this.profitClay, this.profitGrass], label: 'Profitability', type: 'line', borderColor: 'rgba(135, 214, 56, 1)', backgroundColor: 'rgba(135, 214, 56, 0)', pointBackgroundColor: "rgba(135, 214, 56, 1)", pointBorderColor:'rgba(135, 214, 56, 1)'},
                    { data: [this.allPlayers, this.allPlayers, this.allPlayers], label: 'All Players', type: 'line', borderColor: 'rgba(214, 56, 56, 1)', backgroundColor: 'rgba(214, 56, 56, 0)', pointBackgroundColor: "rgba(214, 56, 56, 1)", pointBorderColor:'rgba(214, 56, 56, 1)'},
                    { data: [this.ratioAll, this.ratioClay, this.ratioGrass], label: 'Player', borderColor: 'rgba(56, 135, 214, 1)', backgroundColor: 'rgba(56, 135, 214, 0.8)', pointBackgroundColor: "rgba(56, 135, 214, 1)", pointBorderColor:'rgba(56, 135, 214, 1)', hoverBackgroundColor: 'rgba(23, 96, 170, 1)'}
                ];
        }
        else if(this.isHard == true 
            && this.isGrass == false
            && this.isClay == true) {

                this.barChartLabels = ['All', 'Hard', 'Clay'];
                this.barChartData = [
                    { data: [this.profitAll, this.profitHard, this.profitClay], label: 'Profitability', type: 'line', borderColor: 'rgba(135, 214, 56, 1)', backgroundColor: 'rgba(135, 214, 56, 0)', pointBackgroundColor: "rgba(135, 214, 56, 1)", pointBorderColor:'rgba(135, 214, 56, 1)'},
                    { data: [this.allPlayers, this.allPlayers, this.allPlayers], label: 'All Players', type: 'line', borderColor: 'rgba(214, 56, 56, 1)', backgroundColor: 'rgba(214, 56, 56, 0)', pointBackgroundColor: "rgba(214, 56, 56, 1)", pointBorderColor:'rgba(214, 56, 56, 1)'},
                    { data: [this.ratioAll, this.ratioHard, this.ratioClay], label: 'Player', borderColor: 'rgba(56, 135, 214, 1)', backgroundColor: 'rgba(56, 135, 214, 0.8)', pointBackgroundColor: "rgba(56, 135, 214, 1)", pointBorderColor:'rgba(56, 135, 214, 1)', hoverBackgroundColor: 'rgba(23, 96, 170, 1)'}
                ];
        }
        else if(this.isHard == true 
            && this.isGrass == true
            && this.isClay == false) {

                this.barChartLabels = ['All', 'Hard', 'Grass'];
                this.barChartData = [
                    { data: [this.profitAll, this.profitHard, this.profitGrass], label: 'Profitability', type: 'line', borderColor: 'rgba(135, 214, 56, 1)', backgroundColor: 'rgba(135, 214, 56, 0)', pointBackgroundColor: "rgba(135, 214, 56, 1)", pointBorderColor:'rgba(135, 214, 56, 1)'},
                    { data: [this.allPlayers, this.allPlayers, this.allPlayers], label: 'All Players', type: 'line', borderColor: 'rgba(214, 56, 56, 1)', backgroundColor: 'rgba(214, 56, 56, 0)', pointBackgroundColor: "rgba(214, 56, 56, 1)", pointBorderColor:'rgba(214, 56, 56, 1)'},
                    { data: [this.ratioAll, this.ratioHard, this.ratioGrass], label: 'Player', borderColor: 'rgba(56, 135, 214, 1)', backgroundColor: 'rgba(56, 135, 214, 0.8)', pointBackgroundColor: "rgba(56, 135, 214, 1)", pointBorderColor:'rgba(56, 135, 214, 1)', hoverBackgroundColor: 'rgba(23, 96, 170, 1)'}
                ];
        }
        else if(this.isHard == false 
            && this.isGrass == false
            && this.isClay == true) {

                this.barChartLabels = ['All', 'Clay'];
                this.barChartData = [
                    { data: [this.profitAll, this.profitClay], label: 'Profitability', type: 'line', borderColor: 'rgba(135, 214, 56, 1)', backgroundColor: 'rgba(135, 214, 56, 0)', pointBackgroundColor: "rgba(135, 214, 56, 1)", pointBorderColor:'rgba(135, 214, 56, 1)'},
                    { data: [this.allPlayers, this.allPlayers], label: 'All Players', type: 'line', borderColor: 'rgba(214, 56, 56, 1)', backgroundColor: 'rgba(214, 56, 56, 0)', pointBackgroundColor: "rgba(214, 56, 56, 1)", pointBorderColor:'rgba(214, 56, 56, 1)'},
                    { data: [this.ratioAll, this.ratioClay], label: 'Player', borderColor: 'rgba(56, 135, 214, 1)', backgroundColor: 'rgba(56, 135, 214, 0.8)', pointBackgroundColor: "rgba(56, 135, 214, 1)", pointBorderColor:'rgba(56, 135, 214, 1)', hoverBackgroundColor: 'rgba(23, 96, 170, 1)'}
                ];
        }
        else if(this.isHard == false 
            && this.isGrass == true
            && this.isClay == false) {

                this.barChartLabels = ['All', 'Grass'];
                this.barChartData = [
                    { data: [this.profitAll, this.profitGrass], label: 'Profitability', type: 'line', borderColor: 'rgba(135, 214, 56, 1)', backgroundColor: 'rgba(135, 214, 56, 0)', pointBackgroundColor: "rgba(135, 214, 56, 1)", pointBorderColor:'rgba(135, 214, 56, 1)'},
                    { data: [this.allPlayers, this.allPlayers], label: 'All Players', type: 'line', borderColor: 'rgba(214, 56, 56, 1)', backgroundColor: 'rgba(214, 56, 56, 0)', pointBackgroundColor: "rgba(214, 56, 56, 1)", pointBorderColor:'rgba(214, 56, 56, 1)'},
                    { data: [this.ratioAll, this.ratioGrass], label: 'Player', borderColor: 'rgba(56, 135, 214, 1)', backgroundColor: 'rgba(56, 135, 214, 0.8)', pointBackgroundColor: "rgba(56, 135, 214, 1)", pointBorderColor:'rgba(56, 135, 214, 1)', hoverBackgroundColor: 'rgba(23, 96, 170, 1)'}
                ];
        }
        else if(this.isHard == true 
            && this.isGrass == false
            && this.isClay == false) {

                this.barChartLabels = ['All', 'Hard'];
                this.barChartData = [
                    { data: [this.profitAll, this.profitHard], label: 'Profitability', type: 'line', borderColor: 'rgba(135, 214, 56, 1)', backgroundColor: 'rgba(135, 214, 56, 0)', pointBackgroundColor: "rgba(135, 214, 56, 1)", pointBorderColor:'rgba(135, 214, 56, 1)'},
                    { data: [this.allPlayers, this.allPlayers], label: 'All Players', type: 'line', borderColor: 'rgba(214, 56, 56, 1)', backgroundColor: 'rgba(214, 56, 56, 0)', pointBackgroundColor: "rgba(214, 56, 56, 1)", pointBorderColor:'rgba(214, 56, 56, 1)'},
                    { data: [this.ratioAll, this.ratioHard], label: 'Player', borderColor: 'rgba(56, 135, 214, 1)', backgroundColor: 'rgba(56, 135, 214, 0.8)', pointBackgroundColor: "rgba(56, 135, 214, 1)", pointBorderColor:'rgba(56, 135, 214, 1)', hoverBackgroundColor: 'rgba(23, 96, 170, 1)'}
                ];
        }
        else if(this.isHard == false 
            && this.isGrass == false
            && this.isClay == false) {

                this.barChartLabels = ['All'];
                this.barChartData = [
                    { data: [this.profitAll], label: 'Profitability', type: 'line', borderColor: 'rgba(135, 214, 56, 1)', backgroundColor: 'rgba(135, 214, 56, 0)', pointBackgroundColor: "rgba(135, 214, 56, 1)", pointBorderColor:'rgba(135, 214, 56, 1)'},
                    { data: [this.allPlayers], label: 'All Players', type: 'line', borderColor: 'rgba(214, 56, 56, 1)', backgroundColor: 'rgba(214, 56, 56, 0)', pointBackgroundColor: "rgba(214, 56, 56, 1)", pointBorderColor:'rgba(214, 56, 56, 1)'},
                    { data: [this.ratioAll], label: 'Player', borderColor: 'rgba(56, 135, 214, 1)', backgroundColor: 'rgba(56, 135, 214, 0.8)', pointBackgroundColor: "rgba(56, 135, 214, 1)", pointBorderColor:'rgba(56, 135, 214, 1)', hoverBackgroundColor: 'rgba(23, 96, 170, 1)'}
                ];
        }
    }

    initData() {
        this.ratioAll = 0;
        this.ratioHard = 0;
        this.ratioClay = 0;
        this.ratioGrass = 0;
        this.allPlayers = 0;
        this.profitAll = 0;
        this.profitHard = 0;
        this.profitClay = 0;
        this.profitGrass = 0;
        this.isHard = false;
        this.isGrass = false;
        this.isClay = false;
    }

    mapData() {
        if(this.range.all != null) {
            this.ratioAll = this.range.all.winRatio;
            this.profitAll = this.range.all.profitability;
        }
        if(this.range.hard != null) {
            this.ratioHard = this.range.hard.winRatio;
            this.profitHard = this.range.hard.profitability;
            this.isHard = true;
        }
        if(this.range.clay != null) {
            this.ratioClay = this.range.clay.winRatio;
            this.profitClay = this.range.clay.profitability;
            this.isClay = true;
        }
        if(this.range.grass != null) {
            this.ratioGrass = this.range.grass.winRatio;
            this.profitGrass = this.range.grass.profitability;
            this.isGrass = true;
        }
        this.allPlayers = this.range.winRatioAllPlayer;
    }

}