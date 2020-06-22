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
    { data: [210, 167, 130, 225, 218, 121, 129], label: 'Contagiados' },
    { data: [55, 68, 49, 76, 82, 95, 95], label: 'Fallecidos' }
  ];

  lineChartDataGHT: ChartDataSets[] = [
    { data: [500, 450, 600, 550, 380, 513, 598], label: 'Contagiados' },
    { data: [150, 180, 293, 360, 200, 250, 157], label: 'Fallecidos' }
  ];

  lineChartDataGM: ChartDataSets[] = [
    { data: [220, 175, 100, 140, 201, 187, 113], label: 'Contagiados' },
    { data: [43, 50, 83, 70, 120, 50, 70], label: 'Fallecidos' }
  ];

  lineChartDataGMT: ChartDataSets[] = [
    { data: [530, 445, 640, 544, 338, 548, 520], label: 'Contagiados' },
    { data: [113, 122, 213, 316, 212, 215, 115], label: 'Fallecidos' }
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

