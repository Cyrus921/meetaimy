import { Component, EventEmitter, Output } from '@angular/core';
import { MeetAimyService } from '../../../../Services/meet-aimy.service';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrl: './create-payment.component.css'
})
export class CreatePaymentComponent {
  @Output() paymentCreated = new EventEmitter<void>(); 

  payment = {
    firstName: '',
    lastName: '',
    time: '',
    price: 0,
    paymentMethod: ''
  };

  validationErrors: any = {}; 

  constructor(
    private service: MeetAimyService
  ) { }

  ngOnInit(): void {
    console.log("hi")
  }

  CreatePayment(){
    this.validationErrors = {}; 

    let isValid = true;

    if (!this.payment.firstName.trim()) {
      this.validationErrors.firstName = true;
      isValid = false;
    }
    if (!this.payment.lastName.trim()) {
      this.validationErrors.lastName = true;
      isValid = false;
    }
    if (!this.payment.time) {
      this.validationErrors.time = true;
      isValid = false;
    }
    if (!this.payment.price || this.payment.price <= 0) {
      this.validationErrors.price = true;
      isValid = false;
    }
    if (!this.payment.paymentMethod.trim()) {
      this.validationErrors.paymentMethod = true;
      isValid = false;
    }

    if (!isValid) {
      return; 
    }

    this.service.CreatePayment(this.payment).subscribe(() => {
      this.paymentCreated.emit();
      
      this.payment = {
        firstName: '',
        lastName: '',
        time: '',
        price: 0,
        paymentMethod: ''
      };
    });
  }
}
