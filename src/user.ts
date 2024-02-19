export class User{
    name?: string;
    bday?: Date;

    constructor(name: string, bday: Date){
        this.name= name
        this.bday= bday
    }

    greet(value: string) {
        console.log(`${value} ${this.name}`);
    }

    getType(): string {
        return 'User';
    }
}