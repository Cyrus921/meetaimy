import { Component, ViewChild } from '@angular/core';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentChartComponent } from './payment-chart/payment-chart.component';

@Component({
  selector: 'app-meetaimy',
  templateUrl: './meetaimy.component.html',
  styleUrl: './meetaimy.component.css'
})
export class MeetaimyComponent {

  @ViewChild('list') paymentList!: PaymentListComponent;
  @ViewChild('chart') paymentChart!: PaymentChartComponent;

  ngOnInit(): void {
  }

  onPaymentCreated() {
    this.paymentList.GetPayments(); 
    this.paymentChart.GetChartDetails(); 
  }

}
