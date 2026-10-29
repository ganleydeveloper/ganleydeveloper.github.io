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
  // Injections
  private apiService = inject(ApiService);

  // Variable declarations
  transact = new Transaction('', 0, '', '');

  // Calls general Scripts GET request, which is keyed to Categories tab
  getCategories() {
    this.apiService.getData().subscribe({
      next: function processData(data) {
        console.log(data);
        // const flatArray = data.flat();
      },
      error: (error) => console.error(error)
    })
  }

  // Submits a single transaction, keyed to submit button
  onSubmit() {
    this.apiService.postTransaction(this.transact).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error)
    });
  }
}
