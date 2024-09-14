import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomerDto{
    age: number;
    cpf: string;
    name: string;
    income: number;
    location: string;
}

@Injectable()
export class CustomerAvailableLoansDto{
    customer: string;
    loans:Loans[]=[];
}

@Injectable()
export class Loans{
    type: string;
    interest_rate: number;
}


// As modalidades de empréstimo que serão analisadas são:

// Empréstimo pessoal: Taxa de juros de 4%.
// Empréstimo consignado: Taxa de juros de 2%.
// Empréstimo com garantia: Taxa de juros de 3%.
