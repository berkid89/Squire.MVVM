import { EventEmitter } from '@angular/core';

export interface ICommand {
    canExecute(parameter: any): boolean;

    execute(parameter: any): void;
}