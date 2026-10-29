import { Component } from '@angular/core';
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
  transact = new Transaction('', 0, '', '');

  onSubmit() {
    console.log(this.transact);
  }
}
