import { EventEmitter, Predicate } from '@angular/core'
import { ICommand } from './icommand';

export class RelayCommand implements ICommand {
    private readonly _execute: Function;
    private readonly _canExecute: Predicate<any>;

    canExecuteChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(execute: Function, canExecute: Predicate<any> = null) {
        if (execute == null)
            throw new ReferenceError("ArgumentNullException : execute");

        this._execute = execute;
        this._canExecute = canExecute;
    }

    canExecute(parameter: any): boolean {
        return this._canExecute == null ? true : this._canExecute(parameter);
    }

    execute(parameter: any): void {
        this._execute(parameter);
    }

}