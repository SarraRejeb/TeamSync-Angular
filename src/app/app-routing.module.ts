import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { JobPostingsAddComponent } from './features/job-posting/components/job-postings-add/job-postings-add.component';
import { JobPostingsEditComponent } from './features/job-posting/components/job-postings-edit/job-postings-edit.component';
import { JobPostingsListComponent } from './features/job-posting/components/job-postings-list/job-postings-list.component';
import { PayrollsAddComponent } from './features/payroll/components/payroll-add/payroll-add.component';
import { PayrollListComponent } from './features/payroll/components/payroll-list/payroll-list.component';
import { PayrollEditComponent } from './features/payroll/components/payroll-edit/payroll-edit.component';
import { ProjectBudgetsAddComponent } from './features/project-budget/components/project-budget-add/project-budget-add.component';
import { ProjectBudgetsListComponent } from './features/project-budget/components/project-budget-list/project-budget-list.component';
import { ProjectBudgetEditComponent } from './features/project-budget/components/project-budget-edit/project-budget-edit.component';



const routes: Routes = [
  { path: 'admin',  component: AdminLayoutComponent },
  { path: 'admin/job-postings/add', component: JobPostingsAddComponent },
  { path: 'admin/job-postings/edit/:id', component: JobPostingsEditComponent },
  {path : 'admin/job-postings', component: JobPostingsListComponent},
  { path: 'admin/payrolls/add', component: PayrollsAddComponent },
  { path: 'admin/payrolls', component: PayrollListComponent },
  { path: 'admin/payrolls/edit/:id', component: PayrollEditComponent },
  { path: 'admin/project-budget/add', component: ProjectBudgetsAddComponent },
  { path: 'admin/project-budget', component: ProjectBudgetsListComponent },
  { path: 'admin/project-budgets/edit/:id', component: ProjectBudgetEditComponent },

  { path: 'user',component: UserLayoutComponent},
  { path: '', redirectTo: '/user', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
