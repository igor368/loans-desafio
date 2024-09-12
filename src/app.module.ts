import { Module } from '@nestjs/common';
import { CustomerLoansModule } from './customer-loans/customer-loans.module';


@Module({
  imports: [CustomerLoansModule, ],
  controllers: [],
  providers: [],
})
export class AppModule {}
