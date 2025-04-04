import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PayrollService } from 'src/app/core/services/payroll/payroll.service';
import { Payroll } from '../../models/payroll.model';


@Component({
  selector: 'app-payroll-add',
  templateUrl: './payroll-add.component.html',
  styleUrls: ['./payroll-add.component.css']
})
export class PayrollsAddComponent {
  payroll = {
    employeeId: '',
    employeeName: '', // Ajout de employeeName si nécessaire
    salary: 0,
    bonus: 0,
    payDate: '' // Utiliser payDate pour la date de paiement
  };

  message: string = '';

  constructor(private payrollService: PayrollService, private router: Router) { }

  onSubmit(): void {
    // Crée un objet payroll à partir des valeurs du formulaire
    const payrollData: Payroll = {
      employeeId: this.payroll.employeeId,
      employeeName: this.payroll.employeeName,
      salary: this.payroll.salary,
      bonus: this.payroll.bonus,
      payDate: this.payroll.payDate
    };

    this.payrollService.addPayroll(payrollData).subscribe(
      response => {
        this.message = 'Fiche de paie ajoutée avec succès !';
        setTimeout(() => {
          this.router.navigate(['/payrolls']); // Redirige vers la liste des fiches de paie après ajout
        }, 2000);
      },
      error => {
        console.error('Erreur lors de l’ajout de la fiche de paie', error);
      }
    );
  }

}
