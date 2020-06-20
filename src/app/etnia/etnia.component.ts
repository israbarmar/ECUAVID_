import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-etnia',
  templateUrl: './etnia.component.html',
  styleUrls: ['./etnia.component.css']
})
export class EtniaComponent implements OnInit {

    lineChartDataEM: ChartDataSets[] = [
      { data: [10, 67, 30, 25, 18, 21, 29], label: 'Contagiados' },
      { data: [5, 18, 19, 6, 2, 5, 15], label: 'Fallecidos' }
    ];

    lineChartDataEMT: ChartDataSets[] = [
      { data: [500, 450, 600, 550, 380, 513, 598], label: 'Contagiados' },
      { data: [150, 180, 293, 360, 200, 250, 157], label: 'Fallecidos' }
    ];

    lineChartDataEIT: ChartDataSets[] = [
      { data: [120, 275, 400, 440, 380, 487, 200], label: 'Contagiados' },
      { data: [43, 20, 33, 160, 120, 150, 150], label: 'Fallecidos' }
    ];

    lineChartDataEI: ChartDataSets[] = [
      { data: [30, 45, 40, 44, 38, 48, 20], label: 'Contagiados' },
      { data: [13, 22, 13, 16, 12, 15, 15], label: 'Fallecidos' }
    ];

    lineChartDataAT: ChartDataSets[] = [
      { data: [73, 75, 70, 84, 68, 88, 80], label: 'Contagiados' },
      { data: [33, 52, 43, 56, 32, 55, 45], label: 'Fallecidos' }
    ];

    lineChartDataEA: ChartDataSets[] = [
      { data: [20, 75, 40, 44, 38, 48, 20], label: 'Contagiados' },
      { data: [3, 12, 23, 16, 12, 15, 22], label: 'Fallecidos' }
    ]; 

    lineChartDataEAf: ChartDataSets[] = [
      { data: [45, 30, 48, 24, 28, 58, 21], label: 'Contagiados' },
      { data: [13, 10, 3, 6, 19, 35, 18], label: 'Fallecidos' }
    ]; 

    lineChartDataEAfT: ChartDataSets[] = [
      { data: [75, 70, 68, 64, 48, 78, 61], label: 'Contagiados' },
      { data: [33, 40, 53, 36, 30, 55, 38], label: 'Fallecidos' }
    ]; 

    lineChartDataEB: ChartDataSets[] = [
      { data: [25, 38, 58, 14, 38, 30, 41], label: 'Contagiados' },
      { data: [2, 19, 32, 4, 11, 22, 20], label: 'Fallecidos' }
    ]; 

    lineChartDataEBT: ChartDataSets[] = [
      { data: [65, 78, 88, 54, 68, 50, 61], label: 'Contagiados' },
      { data: [32, 49, 47, 24, 31, 39, 40], label: 'Fallecidos' }
    ]; 

      //Labels shown on the x-axis
      lineChartLabelsE: Label[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes','Sábado', 'Domingo'];

      lineChartLabelsET: Label[] = ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  
      // Define chart options
      lineChartOptionsE: ChartOptions = {
        responsive: true
      };
    
      // Define colors of chart segments
      lineChartColorsEH: Color[] = [

        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'green',
        },
        { // amarillo
          backgroundColor: 'rgba(244, 247, 118, 0.5)',
          borderColor: 'yellow',
        }
      ];

      lineChartColorsET: Color[] = [
      { // dark grey
        backgroundColor: 'rgba(247, 220, 111,0.5)',
        borderColor: 'orange',
      },
    {
      backgroundColor: 'rgba(52, 152, 219,0.5)',
        borderColor: '#2271b3',
    }
    ];
      
    
      // Set true to show legends
      lineChartLegendE = true;
    
      // Define type of chart
      lineChartTypeE = 'line';
    
      lineChartPluginsE = [];
    
      // events
      chartClickedE({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
      }
    
      chartHoveredE({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
