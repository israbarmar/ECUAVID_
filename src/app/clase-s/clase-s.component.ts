import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-clase-s',
  templateUrl: './clase-s.component.html',
  styleUrls: ['./clase-s.component.css']
})
export class ClaseSComponent implements OnInit {
  lineChartDataCA: ChartDataSets[] = [
    { data: [60, 77, 80, 95, 68, 51, 79], label: 'Contagiados' },
    { data: [25, 38, 49, 55, 42, 45, 35], label: 'Fallecidos' }
  ];

  lineChartDataCAT: ChartDataSets[] = [
    { data: [570, 400, 460, 550, 480, 313, 298], label: 'Contagiados' },
    { data: [130, 180, 243, 300, 240, 150, 127], label: 'Fallecidos' }
  ];

  lineChartDataCMT: ChartDataSets[] = [
    { data: [180, 175, 440, 340, 300, 487, 375], label: 'Contagiados' },
    { data: [74, 80, 133, 205, 176, 140, 160], label: 'Fallecidos' }
  ];

  lineChartDataCM: ChartDataSets[] = [
    { data: [37, 55, 48, 34, 28, 40, 27], label: 'Contagiados' },
    { data: [18, 25, 23, 26, 10, 7, 9], label: 'Fallecidos' }
  ];

  lineChartDataCBT: ChartDataSets[] = [
    { data: [193, 145, 190, 180, 298, 108, 150], label: 'Contagiados' },
    { data: [83, 92, 71, 79, 82, 162, 85], label: 'Fallecidos' }
  ];

  lineChartDataCB: ChartDataSets[] = [
    { data: [28, 64, 50, 48, 35, 36, 23], label: 'Contagiados' },
    { data: [13, 22, 27, 26, 19, 15, 18], label: 'Fallecidos' }
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
