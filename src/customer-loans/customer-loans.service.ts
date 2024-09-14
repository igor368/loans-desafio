import { Injectable } from '@nestjs/common';
import { CustomerAvailableLoansDto, CustomerDto, Loans} from './customer.dto';


@Injectable()
export class CustomerLoansService {
    private response: CustomerAvailableLoansDto = new CustomerAvailableLoansDto();
    private loans:Loans = new Loans();

    evaluateLoans(customer:CustomerDto):CustomerAvailableLoansDto{
        const age = customer.age; 
        const income = customer.income;
        const location = customer.location;
        this.response.customer= customer.name;
        
        if(income <=3000){
            // Conceder o empréstimo pessoal se 
            // o salário do cliente for igual ou inferior a R$ 3000.
            this.loans.type="pessoal";
            this.loans.interest_rate=4;
            this.response.loans.push(this.loans);
            // Conceder o empréstimo com garantia se 
            // o salário do cliente for igual ou inferior a R$ 3000.
            this.loans.type="com garantia";
            this.loans.interest_rate=3;
            this.response.loans.push(this.loans);
        }

        if(income>=3000 && income<=5000 && age<30 && location=="SP"){
            // Conceder o empréstimo pessoal se 
            // o salário do cliente estiver entre R$ 3000 e R$ 5000, 
            // se o cliente tiver menos de 30 anos e residir em São Paulo (SP).
            this.loans.type="pessoal";
            this.loans.interest_rate=4;
            this.response.loans.push(this.loans);
            //Conceder o empréstimo com garantia se 
            // o salário do cliente estiver entre R$ 3000 e R$ 5000, 
            // se o cliente tiver menos de 30 anos e residir em São Paulo (SP).
            this.loans.type="com garantia";
            this.loans.interest_rate=3;
            this.response.loans.push(this.loans);
        }

        if(income>=5000){
            // Conceder o empréstimo consignado se 
            // o salário do cliente for igual ou superior a R$ 5000.
            this.loans.type="consignado";
            this.loans.interest_rate=2;
            this.response.loans.push(this.loans);
        }

        return this.response
    }

}
// // Requisitos


