import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  lineChartData: ChartDataSets[] = [
    { data: [1700, 1500, 5100, 4700, 5500, 8000, 5000,4750,3000,2750], label: 'Contagiados' },
    { data: [270, 320, 1250, 760, 1100, 2678, 1000,657,300,275], label: 'Fallecidos' }
  ];
    //Labels shown on the x-axis
    lineChartLabels: Label[] = ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto', 'Septiembre','Octubre','Noviembre','Diciembre'];

    // Define chart options
    lineChartOptions: ChartOptions = {
      responsive: true
    };
  
    // Define colors of chart segments
    lineChartColors: Color[] = [
  
      { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'blue',
      },
      { // red
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
      }
    ];
  
    // Set true to show legends
    lineChartLegend = true;
  
    // Define type of chart
    lineChartType = 'line';
  
    lineChartPlugins = [];
  
    // events
    chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
  constructor() { }

  ngOnInit(): void {
  }

}
