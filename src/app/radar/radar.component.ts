import { Component, Input, OnChanges } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { IRange } from 'src/app/model/range';

@Component({
    selector: 'tennis-radar',
    templateUrl: './radar.component.html'
})
export class RadarComponent implements OnChanges {
  
    @Input() range: IRange;
    public radarChartData: ChartDataSets[];
    public radarChartLabels: Label[] = ['All', 'Hard', 'Clay', 'Grass'];
    public radarChartType: ChartType = 'radar';
    public radarChartOptions: RadialChartOptions = {
        responsive: true,
        legend: {
            labels: {
                fontSize: 20
            }
        },
        title: {
            fontSize: 30
        },
        scale: {
            pointLabels: {
                fontSize: 18,
                fontColor: 'grey'
            },
            gridLines: {
                color: 'rgba(146, 164, 164, 0.15)'
            },
            ticks: {
                display: true,
                stepSize: 20,
                beginAtZero: false

            }
        }
    };

    // Player's data
    ratioAll: number = 0;
    ratioGrass: number = 0;
    ratioHard: number = 0;
    ratioClay: number = 0;
    // All players data
    allAll: number = 0;
    allGrass: number = 0;
    allHard: number = 0;
    allClay: number = 0;
    // Profitability
    profitAll: number = 0;
    profitGrass: number = 0;
    profitHard: number = 0;
    profitClay: number = 0;
    constructor() { }

    ngOnChanges(): void {
        this.initData();
        this.mapData();
        this.radarChartData = [
            { data: [this.ratioAll, this.ratioHard, this.ratioClay, this.ratioGrass], label: 'Player', borderColor: 'rgba(135, 214, 56, 1)', backgroundColor: 'rgba(135, 214, 56, 0.3)', pointBackgroundColor: "rgba(135, 214, 56, 1)", pointBorderColor:'rgba(135, 214, 56, 1)'},
            { data: [this.allAll, this.allHard, this.allClay, this.allGrass], label: 'All Players', borderColor: 'rgba(56, 135, 214, 1)', backgroundColor: 'rgba(56, 135, 214, 0.3)', pointBackgroundColor: "rgba(56, 135, 214, 1)", pointBorderColor:'rgba(56, 135, 214, 1)'},
            { data: [this.profitAll, this.profitHard, this.profitClay, this.profitGrass], label: 'Profitability', borderColor: 'rgba(214, 56, 56, 1)', backgroundColor: 'rgba(214, 56, 56, 0.3)', pointBackgroundColor: "rgba(214, 56, 56, 1)", pointBorderColor:'rgba(214, 56, 56, 1)'}
        ];
    }

    initData() {
        this.ratioAll = 0;
        this.ratioHard = 0;
        this.ratioClay = 0;
        this.ratioGrass = 0;
        this.allAll = 0;
        this.allHard = 0;
        this.allClay = 0;
        this.allGrass = 0;
        this.profitAll = 0;
        this.profitHard = 0;
        this.profitClay = 0;
        this.profitGrass = 0;
    }

    mapData() {
        if(this.range.all != null) {
            this.ratioAll = this.range.all.winRatio;
            this.allAll = this.range.winRatioAllPlayer;
            this.profitAll = this.range.all.profitability;
        }
        if(this.range.hard != null) {
            this.ratioHard = this.range.hard.winRatio;
            this.allHard = this.range.winRatioAllPlayer;
            this.profitHard = this.range.hard.profitability;
        }
        if(this.range.clay != null) {
            this.ratioClay = this.range.clay.winRatio;
            this.allClay = this.range.winRatioAllPlayer;
            this.profitClay = this.range.clay.profitability;
        }
        if(this.range.grass != null) {
            this.ratioGrass = this.range.grass.winRatio;
            this.allGrass = this.range.winRatioAllPlayer;
            this.profitGrass = this.range.grass.profitability;
        }
    }
}