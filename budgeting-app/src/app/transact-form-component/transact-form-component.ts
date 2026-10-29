import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Transaction } from '../transaction';
import { ApiService } from '../api-service';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-transact-form-component',
  styleUrl: './transact-form-component.css',
  templateUrl: './transact-form-component.html',
})
export class TransactFormComponent {
  private apiService = inject(ApiService);

  transact = new Transaction('', 0, '', '');

  
  onSubmit() {
    this.apiService.postTransaction(this.transact).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error)
    });
  }
}
