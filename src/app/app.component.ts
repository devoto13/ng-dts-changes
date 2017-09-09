import { Component } from '@angular/core';
import { myConst } from './some';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent {
  title = 'app' + myConst;
}
