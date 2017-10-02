import { Component } from '@angular/core';
import { TestModel1 } from './models/test-model1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  model: TestModel1;

  constructor() {
    this.model = new TestModel1();
    this.model.name = 1;
    this.model.isValid = true;
    this.model.address =  "my address 1234";
  }
}
