import { Component , AfterViewInit} from '@angular/core';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { MeetAimyService } from '../../../../Services/meet-aimy.service';

@Component({
  selector: 'app-payment-chart',
  templateUrl: './payment-chart.component.html',
  styleUrl: './payment-chart.component.css'
})
export class PaymentChartComponent {


  ChartData : any = null;
  chart: any;

  constructor(
    private service: MeetAimyService
    ) { }


  ngOnInit(): void {
    this.GetChartDetails()
  }

  GetChartDetails(){
    this.service.GetChartDetails().subscribe(data =>{
      console.log("Chart", data)
      this.ChartData = data;
      this.renderChart()
    })
  }


  renderChart() {
    if (!this.ChartData || !this.ChartData.length) return;

    const labels = this.ChartData.map((item: any) => item.paymentMethod);
    const dataValues = this.ChartData.map((item: any) => item.totalPrice);

    if (this.chart) this.chart.destroy();

    const ctx = document.getElementById("paymentChart") as HTMLCanvasElement;
    if (!ctx) return;

    Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

    this.chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Totaal Bedrag (€)",
          data: dataValues,
          backgroundColor: ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"],
          borderColor: "#fff",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
  

}
