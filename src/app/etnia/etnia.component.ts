import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-etnia',
  templateUrl: './etnia.component.html',
  styleUrls: ['./etnia.component.css']
})
export class EtniaComponent implements OnInit {

    lineChartDataE: ChartDataSets[] = [
      { data: [200, 400, 600, 550, 380,513,598], label: 'Contagiados' },
      { data: [50, 80, 193, 260, 200, 250, 157], label: 'Fallecidos' }
    ];

    lineChartDataEM: ChartDataSets[] = [
      { data: [200, 400, 600, 550, 380,513,598], label: 'Contagiados' },
      { data: [50, 80, 193, 260, 200, 250, 157], label: 'Fallecidos' }
    ];
      //Labels shown on the x-axis
      lineChartLabelsE: Label[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes','Sábado', 'Domingo'];
  
      // Define chart options
      lineChartOptionsE: ChartOptions = {
        responsive: true
      };
    
      // Define colors of chart segments
      lineChartColorsE: Color[] = [
    
        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'green',
        },
        { // red
          backgroundColor: 'rgba(244, 247, 118, 0.5)',
          borderColor: 'yellow',
        }
      ];

      lineChartColorsEM: Color[] = [
    
        { // dark grey
          backgroundColor: 'rgba(77,83,96,0.2)',
          borderColor: 'green',
        },
        { // red
          backgroundColor: 'rgba(244, 247, 118, 0.5)',
          borderColor: 'yellow',
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
