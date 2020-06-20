import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {
  lineChartDataGH: ChartDataSets[] = [
    { data: [10, 67, 30, 25, 18, 21, 29], label: 'Contagiados' },
    { data: [5, 18, 19, 6, 2, 5, 15], label: 'Fallecidos' }
  ];

  lineChartDataGHT: ChartDataSets[] = [
    { data: [500, 450, 600, 550, 380, 513, 598], label: 'Contagiados' },
    { data: [150, 180, 293, 360, 200, 250, 157], label: 'Fallecidos' }
  ];

  lineChartDataGM: ChartDataSets[] = [
    { data: [120, 275, 400, 440, 380, 487, 200], label: 'Contagiados' },
    { data: [43, 20, 33, 160, 120, 150, 150], label: 'Fallecidos' }
  ];

  lineChartDataGMT: ChartDataSets[] = [
    { data: [30, 45, 40, 44, 38, 48, 20], label: 'Contagiados' },
    { data: [13, 22, 13, 16, 12, 15, 15], label: 'Fallecidos' }
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

