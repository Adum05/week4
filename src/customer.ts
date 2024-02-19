import { User } from './user';

export class Customer extends User {
    customerNumber?: string;

    override greet(value: string) {
        super.greet(`Employee: ${value}`);
        //console.log('Thi sis a new function')
        //console.log(`${value} ${this.name}`);
    }
}