import { Injectable } from '@nestjs/common';
import { CustomerAvailableLoansDto, CustomerDto, Loans} from './customer.dto';


    @Injectable()
    export class CustomerLoansService {
        private response: CustomerAvailableLoansDto = new CustomerAvailableLoansDto();
        private loans:Loans = new Loans();

        addLoan(loan:string, interest_rate:number){
            const newLoan = new Loans();
            newLoan.type= loan;
            newLoan.interest_rate= interest_rate;
            this.response.loans.push(newLoan);
        }

        evaluateLoans(customer:CustomerDto):CustomerAvailableLoansDto{
            const age = customer.age; 
            const income = customer.income;
            const location = customer.location;
            this.response.customer= customer.name;
            
            
            if(income <=3000){
                this.addLoan("pessoal",4)
                this.addLoan("com garantia",3)
            }

            if(income>3000 && income<=5000 && age<30 && location=="SP"){
                this.addLoan("pessoal",4)
                this.addLoan("com garantia",3)
            }

            if(income>=5000){
                this.addLoan("consignado",2)
            }
            
            return this.response
        }

    }



