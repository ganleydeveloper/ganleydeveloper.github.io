import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';
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
  categories: any;

  // Variable declarations
  transact = new Transaction('', 0, formatDate(new Date(), 'MM/dd/yyyy', 'en-US'), '');

  // Calls general Scripts GET request, which is keyed to Categories tab
  getCategories() {
    this.apiService.getData().subscribe({
      next: (data) => {
        console.log(data);
        this.categories = data;
      },
      error: (error) => console.error(error)
    })
  }

  processData(data: any) {
    for(let i=0; i < data.length; i++) {
      console.log(data[i]);
    }
  }
  /* processData(this.categories) {
        for(let i = 0; i < data.length; i++) {
          if(data[i][0] === "Necessary") {
            necesArray.append(data[i][1]);
          } else if(data[i][0] === "Discretionary") {
            discArray.append(data[i][1]);
          } else {
            console.error("Invalid transaction type provided in categories sheet");
          }
          console.log(data[i][0]);
        }
      } */

  // Submits a single transaction, keyed to submit button
  onSubmit() {
    console.log(this.categories);
    console.log(this.transact);
    // Disabled actual data submission for testing purposes
    /* this.apiService.postTransaction(this.transact).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error)
    }); */
  }
}
