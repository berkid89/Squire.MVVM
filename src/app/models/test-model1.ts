import { ViewModelBase } from '../framework/view-model-base';
import { RelayCommand } from '../framework/relay-command';

export class TestModel1 {
    name: number = 1;
    isValid: boolean;
    address: string;

    changeNameCommand: RelayCommand;

    constructor() {
        this.changeNameCommand = new RelayCommand(this.changeName.bind(this));
    }

    changeName() {
        debugger;
        this.name = this.name + 1;
    }
}