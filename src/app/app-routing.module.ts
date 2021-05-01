import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GlobalStatisticsComponent } from './global/global.component';
import { ProfitComponent } from './profit/profit.component';
import { StatisticsComponent } from './statistics/statistics.component';


const routes: Routes = [
  { path: 'statistics', component: StatisticsComponent },
  { path: 'global', component: GlobalStatisticsComponent },
  { path: 'profit', component: ProfitComponent },
  { path : '', redirectTo: 'statistics', pathMatch: 'full'},
  { path : '**', redirectTo: 'statistics', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
