import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentListComponent } from './components/payment-list/payment-list.component';
import { PaymentAddComponent } from './components/payment-add/payment-add.component';
import { PaymentEditComponent } from './components/payment-edit/payment-edit.component';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';


@NgModule({
  declarations: [
    PaymentListComponent,
    PaymentAddComponent,
    PaymentEditComponent,
    PaymentDetailComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [

  ]
})
export class PaymentModule { 


}
