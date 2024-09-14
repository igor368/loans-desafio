import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CustomerLoansService } from './customer-loans.service';
import { CustomerAvailableLoansDto, CustomerDto } from './customer.dto';

@Controller('customer-loans')
export class CustomerLoansController {
  constructor(private readonly customerLoansService: CustomerLoansService) {}

  @HttpCode(200)
  @Post()
  availableLoans(@Body()customer:CustomerDto):CustomerAvailableLoansDto{
    return this.customerLoansService.evaluateLoans(customer);
  }
 
}
