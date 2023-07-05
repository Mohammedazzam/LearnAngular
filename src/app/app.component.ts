import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Courses Front-End Angular';
  sayMohammed():string {
    return `Hello Mohammed Azzam!`;
  }
}
