import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactFormComponent } from './transact-form-component/transact-form-component';
// import { Home } from './home/home';

@Component({
  imports: [RouterOutlet, TransactFormComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('budgeting-app');

  // DEPLOY COMMAND: ng deploy --base-href=/ganleydeveloper.github.io/
  // DEPLOYED URL: https://ganleydeveloper.github.io/
}
