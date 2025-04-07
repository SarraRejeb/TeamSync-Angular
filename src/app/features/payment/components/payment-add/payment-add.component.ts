import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/core/services/payment/payment.service';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { Router } from '@angular/router';
import { Employee } from 'src/app/features/employee/models/employee.model';

enum PaymentMethod {
  PAYPAL = 'PAYPAL',
  CASH = 'CASH',
  CHECK = 'CHECK',
  STRIPE = 'STRIPE',
  VIREMENT = 'VIREMENT',
  BANK = 'BANK'
}

enum PaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  CANCELLED = 'CANCELLED'
}

enum RecurrenceFrequency {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  BIWEEKLY = 'BIWEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY'
}

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {
  paymentForm!: FormGroup;
  employees: Employee[] = [];
  paymentMethods = Object.values(PaymentMethod);
  paymentStatuses = Object.values(PaymentStatus);
  recurrenceFrequencies = Object.values(RecurrenceFrequency);
  loading = false;
  submitted = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.fetchEmployees();
  }

  get f() {
    return this.paymentForm.controls;
  }

  initForm(): void {
    this.paymentForm = this.fb.group({
      employeeId: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      status: ['PENDING', Validators.required],
      description: [''],
      isRecurring: [false],
      recurrenceFrequency: ['']
    });
  }

  fetchEmployees(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => this.employees = data,
      error: () => this.errorMessage = "Erreur de chargement des employés"
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.paymentForm.invalid) return;

    this.loading = true;
    const paymentData = { ...this.paymentForm.value };

    if (!paymentData.isRecurring) {
      paymentData.recurrenceFrequency = null;
    }

    this.paymentService.createPayment(paymentData).subscribe({
      next: () => {
        this.successMessage = 'Paiement ajouté avec succès !';
        this.router.navigate(['/payments']);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = "Erreur lors de l'ajout du paiement.";
      },
      complete: () => this.loading = false
    });
  }
}
