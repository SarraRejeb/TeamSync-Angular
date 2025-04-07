import { Component, OnInit } from '@angular/core';
import { PayrollService } from 'src/app/core/services/payroll/payroll.service';


@Component({
  selector: 'app-payroll-user',
  templateUrl: './payroll-user.component.html',
  styleUrls: ['./payroll-user.component.css']
})
export class PayrollUserComponent implements OnInit {
  payment: any;
  employeeId: string = '67f0920aa15fb50ce3b5d81f';  // L'ID de l'employé que tu veux afficher

  constructor(private payrollService: PayrollService) {}

  ngOnInit(): void {
    // Appel du service pour récupérer les données
    this.payrollService.getPaymentDetails(this.employeeId).subscribe(
      (data) => {
        console.log('Données reçues :', data);  // Vérifiez ici les données renvoyées par l'API
        this.payment = data;
      },
      (error) => {
        console.error('Erreur de récupération des paiements', error);
      }
    );
    
  }
  
}
