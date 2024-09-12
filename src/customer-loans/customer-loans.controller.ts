import { Body, Controller, Post } from '@nestjs/common';
import { CustomerLoansService } from './customer-loans.service';
import { CustomerDto } from './customer.dto';

@Controller('customer-loans')
export class CustomerLoansController {
  constructor(private readonly customerLoansService: CustomerLoansService) {}
  @Post()
  avaliation(@Body()customer:CustomerDto){
    
  }
}
