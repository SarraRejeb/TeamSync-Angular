import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectBudgetService } from 'src/app/core/services/project-budget/project-budget.service';
import { Router } from '@angular/router';
import { Projet } from '../../models/projet.model';
import { ProjetService } from 'src/app/core/services/project/project.service'; // Assurez-vous d'importer ce service.

@Component({
  selector: 'app-project-budget-add',
  templateUrl: './project-budget-add.component.html',
  styleUrls: ['./project-budget-add.component.css']
})
export class ProjectBudgetsAddComponent implements OnInit {
  budgetForm!: FormGroup;
  projets: Projet[] = [];

  constructor(
    private fb: FormBuilder,
    private budgetService: ProjectBudgetService,
    private projetService: ProjetService, // Instancier correctement le service
    private router: Router
  ) {}

  ngOnInit(): void {
    this.budgetForm = this.fb.group({
      projetId: ['', Validators.required],
      allocatedFunds: [0, [Validators.required, Validators.min(0)]],
      usedFunds: [0, [Validators.required, Validators.min(0)]],
    });
  
    this.projetService.getAllProjets().subscribe(
      (data: Projet[]) => {
        console.log('Projets récupérés:', data);
        this.projets = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des projets', error);
        alert('Impossible de récupérer les projets, vérifiez la connexion avec l\'API.');
      }
    );
  }
  

  onSubmit(): void {
    if (this.budgetForm.valid) {
      const selectedProjet = this.projets.find(p => p.id === this.budgetForm.value.projetId);
  
      if (!selectedProjet) {
        console.error('Projet non trouvé !');
        return;
      }
  
      const payload = {
        projet: selectedProjet,
        allocatedFunds: this.budgetForm.value.allocatedFunds,
        usedFunds: this.budgetForm.value.usedFunds
      };
  
      // Créer le budget du projet
      this.budgetService.createProjectBudget(payload).subscribe(() => {
        this.router.navigate(['/admin/project-budgets']);
      }, error => {
        console.error('Erreur lors de la création du budget du projet', error);
      });
    }
  }
}
