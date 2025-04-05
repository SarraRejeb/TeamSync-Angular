import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { PayrollService } from 'src/app/core/services/payroll/payroll.service';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { Payroll } from '../../models/payroll.model';
import { Employee } from 'src/app/features/employee/models/employee.model';

@Component({
  selector: 'app-payroll-add',
  templateUrl: './payroll-add.component.html',
  styleUrls: ['./payroll-add.component.css']
})
export class PayrollsAddComponent implements OnInit {
  payroll = {
    employeeId: '',
    employeeName: '', // Ajout de employeeName si nécessaire
    salary: 0,
    bonus: 0,
    payDate: '' // Utiliser payDate pour la date de paiement
  };

  employees: Employee[] = [];  // Liste des employés
  message: string = '';

  constructor(
    private payrollService: PayrollService,
    private employeeService: EmployeeService,  // Injecter EmployeeService
    private router: Router,
    private cdRef: ChangeDetectorRef  // Utilisé pour détecter les changements
  ) {}

  ngOnInit(): void {
    this.loadEmployees();  // Charger la liste des employés
  }

  loadEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      (employees) => {
        this.employees = employees;
        console.log('Employés:', this.employees);  // Vérifie les employés dans la console
        this.cdRef.detectChanges();  // Détecter les changements dans la vue
      },
      (error) => {
        console.error('Erreur lors du chargement des employés', error);
      }
    );
  }

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
