import { Customer } from './customer';
import { Employee } from './employee';
import { User } from './user';

//let user = new User();
//user.employeeCode= '1234';
//user.greet('Hello')


let employee= new Employee('Aday', new Date(), '1234');
let customer = new Customer('Janniel', new Date());
//customer.greet('Hola')

log(employee);
log(customer);

function log(user: User) {
    
//Option1   
    //if (user.constructor.name === 'Employee'){
      //  console.log(`Employee ${user.name}`)
    //} else{
     //   console.log(`Customer ${user.name}`)

    //}

    //Option 2
    //if('employeeCode' in user) {
      //  console.log(`Employee ${user.name}`);
    //} else {
      //  console.log(`Customer ${user.name}`)
    //}

    //Option 3
    //if(user instanceof Employee) {
      //  console.log(`Employee ${user.name}`);
    //} else {
      //  console.log(`Customer ${user.name}`);
    //}

     //Option4
   console.log(`${user.getType()} ${user.name}`)
   }

  
   


//function logCustomer(user: Customer) {
  //  console.log(`Customer ${user.name}`)
//}

//function logEmployee(user: Customer) {
  //  console.log(`Employee ${user.name}`)
//}