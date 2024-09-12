import { Module } from '@nestjs/common';
import { CustomerLoansService } from './customer-loans.service';
import { CustomerLoansController } from './customer-loans.controller';

@Module({
  controllers: [CustomerLoansController],
  providers: [CustomerLoansService],
})
export class CustomerLoansModule {}
