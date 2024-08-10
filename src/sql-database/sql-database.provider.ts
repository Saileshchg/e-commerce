import { Sequelize } from 'sequelize-typescript';
import { User } from './models/user.model';
import { Payment } from './models/payment.model';

export const sqlDatabaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            console.log(process.env.SQL_HOST, process.env.SQL_PASSWORD)
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: process.env.SQL_HOST,
                port: 3306,
                username: process.env.SQL_USERNAME,
                password: process.env.SQL_PASSWORD,
                database: process.env.SQL_DATABASE_NAME,
            });
            sequelize.addModels([User, Payment]);
            await sequelize.sync();
            return sequelize;
        },
    },
];