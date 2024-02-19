import { User } from './user';

export class Employee extends User {
	employeeCode?: string;

    constructor(name: string, bday: Date, employeeCode: string) {
        super(name, bday);
        this.employeeCode= employeeCode;
    }

    override greet(value: string) {
        super.greet(`Employee: ${value}`);
        //console.log('Thi sis a new function')
        //console.log(`${value} ${this.name}`);
    }
}