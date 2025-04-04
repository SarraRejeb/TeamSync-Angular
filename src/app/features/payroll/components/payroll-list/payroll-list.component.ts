import { Component, OnInit } from '@angular/core';
import { Payroll } from '../../models/payroll.model';
import { PayrollService } from 'src/app/core/services/payroll/payroll.service';
import { Router } from '@angular/router';  // Importation de Router

@Component({
  selector: 'app-payroll-list',
  templateUrl: './payroll-list.component.html',
  styleUrls: ['./payroll-list.component.css']
})
export class PayrollListComponent implements OnInit {
  payrolls: Payroll[] = [];
  employeeNames: Map<string, string> = new Map();

  // Ajout de Router dans le constructeur pour l'injection de dépendance
  constructor(private payrollService: PayrollService, private router: Router) {}

  ngOnInit(): void {
    this.loadPayrolls();
  }

  loadPayrolls(): void {
    this.payrollService.getAllPayrolls().subscribe(
      (data) => {
        this.payrolls = data;
        this.payrolls.forEach(payroll => {
          this.payrollService.getEmployeeName(payroll.employeeId).subscribe(
            (name) => {
              this.employeeNames.set(payroll.employeeId, name);
            },
            (error) => {
              console.error('Erreur lors de la récupération du nom de l\'employé', error);
            }
          );
        });
      },
      (error) => {
        console.error('Erreur lors de la récupération des fiches de paie', error);
      }
    );
  }
  
  onEdit(payroll: Payroll): void {
    // Utilisation de l'instance de router injectée pour la redirection
    this.router.navigate([`/admin/payrolls/edit`, payroll.id]);
  }
  
  onDelete(payrollId: string): void {
    this.payrollService.deletePayroll(payrollId).subscribe(
      () => {
        console.log('Fiche de paie supprimée avec succès');
        this.loadPayrolls();  // Rechargement de la liste après suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression de la fiche de paie', error);
      }
    );
  }
}
