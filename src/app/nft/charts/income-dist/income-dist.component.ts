import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-income-dist',
  templateUrl: './income-dist.component.html',
  styleUrls: ['./income-dist.component.scss']
})
export class IncomeDistComponent {
  public barChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 33, 33, 33],
        label: 'Income Percentage Share',
        backgroundColor: [
          'rgba(27, 61, 20, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)'
        ],
        borderColor: 'rgba(150,95,56,1)',
        pointBackgroundColor: 'rgba(150,95,56,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(150,95,56,0.8)',
        fill: 'origin',
      },
    ],
    labels: [ 'Habitat', 'Artist', 'Oika' ]
  };

  public barChartOptions = {
      scales: {
          x: {
              grid: {
                offset: true
              }
          }
      }
  };

  public barChartType: ChartType = 'bar';

  constructor() {}
}
