import { Component, Input } from '@angular/core';
import { ViewModelBase } from './view-model-base';

export class BaseComponent<ContextType> {
    @Input() DataContext: ContextType;

    constructor() {
    }
}