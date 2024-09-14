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


