import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-ecological-state-chart',
  templateUrl: './ecological-state-chart.component.html',
  styleUrls: ['./ecological-state-chart.component.scss']
})
export class EcologicalStateChartComponent {
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 65, 59, 68, 74, 56, 55, 60 ],
        label: 'Soil Index',
        backgroundColor: 'rgba(150,95,56,0.2)',
        borderColor: 'rgba(150,95,56,1)',
        pointBackgroundColor: 'rgba(150,95,56,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(150,95,56,0.8)',
        fill: 'origin',
      },
      {
        data: [ 40, 42, 48, 46, 62, 60, 59 ],
        label: 'Biodiversity Index',
        backgroundColor: 'rgba(27,61,20,0.2)',
        borderColor: 'rgba(27,61,20,1)',
        pointBackgroundColor: 'rgba(27,61,20,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(27,61,20,0.8)',
        fill: 'origin',
      },
    ],
    labels: [ 'October', 'November', 'December', 'January', 'February', 'March', 'April' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      'y-axis-0':
        {
          position: 'left',
        },
    },
    // height: (9 / 16 * 100) + '%',
    plugins: {
      legend: { display: true },
    }
  };

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }
}
