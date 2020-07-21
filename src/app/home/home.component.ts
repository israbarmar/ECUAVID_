import { Component} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  

  
  lineChartData: ChartDataSets[] = [
    { data: [1700, 1500, 5100, 4700, 5500], label: 'Contagiados' },
    { data: [270, 320, 1250, 760, 1100], label: 'Fallecidos' }
  ];
    //Labels shown on the x-axis
    lineChartLabels: Label[] = ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

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
    chartClickedD({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    chartHoveredD({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    lineChartDataD: ChartDataSets[] = [
      { data: [400, 450, 500, 550, 570, 575, 600], label: 'Contagiados' },
      { data: [300, 350, 320, 400, 455, 370, 400], label: 'Fallecidos' },
    ];
      //Labels shown on the x-axis
      lineChartLabelsD: Label[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes','Sábado', 'Domingo'];
  
      // Define chart options
      lineChartOptionsD: ChartOptions = {
        responsive: true
      };
    
      // Define colors of chart segments
      lineChartColorsD: Color[] = [
    
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
      lineChartLegendD = true;
    
      // Define type of chart
      lineChartTypeD = 'line';
    
      lineChartPluginsD = [];
    
      // events
      chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
      }
    
      chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
      }
    }