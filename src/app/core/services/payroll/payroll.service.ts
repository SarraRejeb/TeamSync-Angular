import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payroll } from 'src/app/features/payroll/models/payroll.model';

@Injectable({
  providedIn: 'root'
})
export class PayrollService {
  private apiUrl = 'http://localhost:8082/api/payrolls'; // URL Backend Spring Boot
  private employeeApiUrl = 'http://localhost:8082/api/employees'; // URL pour récupérer les employés

  constructor(private http: HttpClient) {}

  // Récupérer tous les payrolls
  getAllPayrolls(): Observable<Payroll[]> {
    return this.http.get<Payroll[]>(this.apiUrl);
  }

  // Récupérer le nom de l'employé par ID
  getEmployeeName(employeeId: string): Observable<string> {
   return this.http.get<string>(`${this.employeeApiUrl}/${employeeId}/name`);
 }
 

  // Récupérer un payroll par ID
  getPayrollById(id: string): Observable<Payroll> {
    return this.http.get<Payroll>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un payroll
  addPayroll(payroll: Payroll): Observable<Payroll> {
   return this.http.post<Payroll>(`${this.apiUrl}/savePayroll`, payroll);
 }
 

  // Mettre à jour un payroll
  updatePayroll(id: string, payroll: Payroll): Observable<Payroll> {
    return this.http.put<Payroll>(`${this.apiUrl}/${id}`, payroll);
  }

  // Supprimer un payroll
  deletePayroll(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
