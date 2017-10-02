import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../framework/base.component';
import { TestModel1 } from '../models/test-model1';

@Component({
  selector: 'app-test-comp1',
  templateUrl: './test-comp1.component.html',
  styleUrls: ['./test-comp1.component.css']
})
export class TestComp1Component extends BaseComponent<TestModel1> implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit() {
  }

}
