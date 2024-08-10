import { Module } from '@nestjs/common';
import { sqlDatabaseProviders } from './sql-database.provider';
import { usersProviders } from './models/user.model';
import { paymentProviders } from './models/payment.model';

@Module({
    providers: [...sqlDatabaseProviders, ...usersProviders, ...paymentProviders],
    exports: [...sqlDatabaseProviders, ...usersProviders, ...paymentProviders],
})
export class SqlDatabaseModule {}
