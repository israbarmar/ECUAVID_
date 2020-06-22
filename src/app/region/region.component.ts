import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
    lineChartDataRC: ChartDataSets[] = [
      { data: [63, 67, 71, 83, 58, 67, 59], label: 'Contagiados' },
      { data: [23, 28, 29, 35, 31, 45, 25], label: 'Fallecidos' }
    ];
  
    lineChartDataRCT: ChartDataSets[] = [
      { data: [372, 320, 430, 400, 380, 333, 288], label: 'Contagiados' },
      { data: [143, 160, 210, 240, 140, 169, 120], label: 'Fallecidos' }
    ];
  
    lineChartDataRST: ChartDataSets[] = [
      { data: [120, 275, 400, 440, 380, 487, 200], label: 'Contagiados' },
      { data: [43, 20, 33, 160, 120, 150, 150], label: 'Fallecidos' }
    ];
  
    lineChartDataRS: ChartDataSets[] = [
      { data: [30, 45, 40, 44, 48, 38, 40], label: 'Contagiados' },
      { data: [13, 22, 13, 26, 22, 25, 19], label: 'Fallecidos' }
    ];
  
    lineChartDataRAT: ChartDataSets[] = [
      { data: [73, 75, 70, 84, 68, 88, 80], label: 'Contagiados' },
      { data: [33, 52, 43, 56, 32, 55, 45], label: 'Fallecidos' }
    ];
  
    lineChartDataRA: ChartDataSets[] = [
      { data: [20, 75, 40, 44, 38, 48, 20], label: 'Contagiados' },
      { data: [3, 12, 23, 16, 12, 15, 22], label: 'Fallecidos' }
    ]; 

    lineChartDataRIT: ChartDataSets[] = [
      { data: [52, 44, 61, 54, 68, 80, 93], label: 'Contagiados' },
      { data: [21, 22, 30, 26, 45, 62, 56], label: 'Fallecidos' }
    ];
  
    lineChartDataRI: ChartDataSets[] = [
      { data: [10, 15, 20, 14, 27, 18, 20], label: 'Contagiados' },
      { data: [5, 2, 3, 6, 8, 10, 12], label: 'Fallecidos' }
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
  