import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api-service';
import { TransactFormComponent } from './transact-form-component/transact-form-component';
// import { Home } from './home/home';

@Component({
  imports: [RouterOutlet, TransactFormComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('budgeting-app');
  private apiService = inject(ApiService);

  ngOnInit() {
    this.apiService.getData().subscribe({
      next: (data) => console.log(data),
      error: (error) => console.error(error)
    })
  }
}
