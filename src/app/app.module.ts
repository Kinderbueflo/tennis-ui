import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StatisticsModule } from './statistics/statistics.module';
import { ThemeService } from 'ng2-charts';
import { GlobalStatisticsModule } from './global/global.module';
import { ProfitModule } from './profit/profit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StatisticsModule,
    GlobalStatisticsModule,
    ProfitModule,
    AppRoutingModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
