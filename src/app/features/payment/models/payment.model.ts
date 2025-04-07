export interface Payment {
 id: string;
 employeeId: string;
 payrollId: string;
 amount: number;
 paymentDate: string;
 description: string;
 isRecurring: boolean;
 recurrenceFrequency: string; // Exemple: 'MONTHLY', 'WEEKLY', etc.
 status: string;  // Exemple: 'COMPLETED', 'PENDING', etc.
 paymentMethod: string;  // Exemple: 'CREDIT_CARD', 'BANK_TRANSFER', etc.
 referenceNumber: string;
}
