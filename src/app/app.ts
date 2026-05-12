import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';
import { Hello } from './hello/hello';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('automata');
}
