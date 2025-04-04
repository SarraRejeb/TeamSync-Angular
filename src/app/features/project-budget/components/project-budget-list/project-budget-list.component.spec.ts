import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBudgetListComponent } from './project-budget-list.component';

describe('ProjectBudgetListComponent', () => {
  let component: ProjectBudgetListComponent;
  let fixture: ComponentFixture<ProjectBudgetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectBudgetListComponent]
    });
    fixture = TestBed.createComponent(ProjectBudgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
