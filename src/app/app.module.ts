import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminHeaderComponent } from './shared/components/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './shared/components/admin/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './shared/components/admin/admin-sidebar/admin-sidebar.component';
import { UserHeaderComponent } from './shared/components/user/user-header/user-header.component';
import { UserFooterComponent } from './shared/components/user/user-footer/user-footer.component';
import { AdminHomeComponent } from './shared/components/admin/admin-home/admin-home.component';
import { UserHomeComponent } from './shared/components/user/user-home/user-home.component';
import { JobPostingModule } from './features/job-posting/job-posting.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { share } from 'rxjs';
import { PayrollListComponent } from './features/payroll/components/payroll-list/payroll-list.component';
import { PayrollsAddComponent } from './features/payroll/components/payroll-add/payroll-add.component';
import { PayrollEditComponent } from './features/payroll/components/payroll-edit/payroll-edit.component';
import { PayrollDeleteComponent } from './features/payroll/components/payroll-delete/payroll-delete.component';
import { ProjectBudgetsListComponent } from './features/project-budget/components/project-budget-list/project-budget-list.component';
import { ProjectBudgetsAddComponent } from './features/project-budget/components/project-budget-add/project-budget-add.component';
import { ProjectBudgetEditComponent } from './features/project-budget/components/project-budget-edit/project-budget-edit.component';
import { ProjectBudgetDeleteComponent } from './features/project-budget/components/project-budget-delete/project-budget-delete.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    PayrollListComponent,
    PayrollsAddComponent,
    PayrollEditComponent,
    PayrollDeleteComponent,
    ProjectBudgetsListComponent,
    ProjectBudgetsAddComponent,
    ProjectBudgetEditComponent,
    ProjectBudgetDeleteComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    JobPostingModule,
   
  ],
 

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
