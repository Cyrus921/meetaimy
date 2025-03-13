import { Component } from '@angular/core';
import { MeetAimyService } from '../../../../Services/meet-aimy.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css'
})
export class PaymentListComponent {

  Payments : any = null;

  constructor(
    private service: MeetAimyService
    ) { }


  ngOnInit(): void {
    this.GetPayments()
  }

  GetPayments(){
    this.service.GetPayments().subscribe(data =>{
      console.log(data)
      this.Payments = data;
    })
  }


}
